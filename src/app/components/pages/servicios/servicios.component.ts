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

  checked: boolean = false;

  unidades: string[];
  tipotrabajo: string[];
  tipoenvase: string[];
  color: string[];
  kiloslitros: string[];
  colorcaja: string[];

  constructor(private servSvc: ServiciosService) { }

  public servForm = new FormGroup({
    nombreempresa: new FormControl('', Validators.required),
    nombrecontacto: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nombreproducto: new FormControl('', Validators.required),
    grupo: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    unidad: new FormControl('', Validators.required),
    tipotrabajo: new FormControl('', Validators.required),
    tipoenvase: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    medidaenvase: new FormControl('', Validators.required),
    colorcaja: new FormControl('', Validators.required),
    ndelote: new FormControl('', Validators.required),
    fechafabricacion: new FormControl('', Validators.required),
    fechavencimiento: new FormControl('', Validators.required),
    otros: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.CargarOpciones();
  }

  private CargarOpciones(){
    this.unidades = [
      'Litros', 
      'Kilogramos'
    ];
    this.tipotrabajo = [
      'Fraccionamiento', 
      'Reproceso', 
      'Impresión'
    ];
    this.tipoenvase = [
      'COEX', 
      'PET'
    ];
    this.color = [
      'Blanco', 
      'Ambar'
    ];
    this.kiloslitros = [
      '250 ml', 
      '500 ml', 
      '1000 ml', 
      '5000 ml', 
      '20000 ml',
      '100 gr', 
      '250 gr', 
      '500 gr', 
      '1000 gr'
    ];
    this.colorcaja = [
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
        this.servSvc.saveServicio(data).then(()=>{
          Swal.fire('Solicitud de servicio enviada', 'Recibira su cotización en la brevedad', 'success');
        }).catch(()=>{
          Swal.fire('Error', 'Error al enviar la solicitud de servicio', 'error');
        });
      }
    });
  }
}