import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ServicioI } from "src/app/shared/models/servicio.interface";
import { ServiciosService } from "src/app/components/pages/servicios/servicios.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  public selectedType: string;

  checked: boolean = false;

  tipotrabajoA: string[];
  tipoenvaseA: string[];
  colorA: string[];
  colorcajaA: string[];

  unidadseleccionada = [];
  unidades = ['Litros', 'Kilogramos'];
  medidas = {
    'Litros': ['250 ml', '500 ml', '1000 ml', '5000 ml', '20000 ml'],
    'Kilogramos': [ '100 gr', '250 gr', '500 gr', '1000 gr']
  };

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private numberPattern: any = /^-?(0|[1-9]\d*)?$/;

  constructor(private servSvc: ServiciosService) { }

  cambioUnidad(dato: string){
    this.unidadseleccionada = this.medidas[dato];
  }

  getformControl(name){
    return this.servForm.get(name);
  }

  public servForm = new FormGroup({
    nombreempresa: new FormControl('', [Validators.required, Validators.minLength(5)]),
    nombrecontacto: new FormControl('', [Validators.required, Validators.minLength(10)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.numberPattern)]),
    email: new FormControl('', [Validators.minLength(10), Validators.pattern(this.emailPattern)]),
    nombreproducto: new FormControl('', [Validators.required, Validators.minLength(5)]),
    grupo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    cantidad: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(this.numberPattern)]),

    unidad: new FormControl('', Validators.required),
    tipotrabajo: new FormControl('', Validators.required),
    tipoenvase: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    medidaenvase: new FormControl('', Validators.required),
    colorcaja: new FormControl('', Validators.required),

    ndelote: new FormControl('', Validators.required),
    fechafabricacion: new FormControl('', Validators.required),
    fechavencimiento: new FormControl('', Validators.required),
    otros: new FormControl('')
  });

  ngOnInit(): void {
    this.CargarOpciones();
  }

  private CargarOpciones(){
    this.tipotrabajoA = [
      'Fraccionamiento', 
      'Reproceso', 
      'Impresión'
    ];
    this.tipoenvaseA = [
      'COEX', 
      'PET'
    ];
    this.colorA = [
      'Blanco', 
      'Ambar'
    ];
    this.colorcajaA = [
      'con etiquetas', 
      'con impresión'
    ];
  }

  salir(){
    Swal.fire({
      title: '¿Desea cancelar la solicitud de servicio?',
      text: 'La información introducida en el formulario se borrará.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        Swal.fire('Solicitud cancelada', '', 'success');
        window.location.reload();
      }
    });
  }

  guardarServicio(data: ServicioI){
    Swal.fire({
      title: '¿Enviar solicitud de servicio?',
      text: 'Verifica los datos antes de enviar, no puedes deshacer esta acción',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar',
    }).then(result => {
      if (result.value) {
        if (this.servForm.valid) {
          this.servSvc.saveServicio(data).then(()=>{
            Swal.fire('Solicitud de servicio enviada', 'Recibira su cotización en la brevedad', 'success');
            window.location.reload();
            }).catch(()=>{
              Swal.fire('Error', 'Error al enviar la solicitud de servicio', 'error');
          });
        } else {
          Swal.fire('Campos requeridos', 'Los campos con un "*" al costado, son campos obligatorios', 'info');
        }
      }
    });
  }

}