import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from "src/app/components/pages/productos/productos.service";
import { ProductoI } from "src/app/shared/models/producto.interface";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CotizacionI } from "src/app/shared/models/cotizacion.interface";
import { CotizarService } from "src/app/components/pages/productos/cotizar/cotizar.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.scss']
})
export class CotizarComponent implements OnInit {

  @Input() producto: ProductoI;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private numberPattern: any = /^-?(0|[1-9]\d*)?$/;

  constructor(private prodSvc: ProductosService, private cotSvc: CotizarService) { }

  getformControl(name){
    return this.cotProdForm.get(name);
  }

  public cotProdForm = new FormGroup({
    nombre: new FormControl(''),
    envasedesc: new FormControl('', Validators.required),
    cantidad: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(this.numberPattern)]),
    razonsocial: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.minLength(10), Validators.pattern(this.emailPattern)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.numberPattern)]),
    interno: new FormControl('', [Validators.minLength(1), Validators.pattern(this.numberPattern)])
  });

  ngOnInit(): void {
    this.initValuesForm();
  }

  private initValuesForm():void{
    this.cotProdForm.patchValue({
      id: this.producto.id,
      nombre: this.producto.nombre,
      envasedesc: this.producto.envasedesc,
      //cantidad: '',
      razonsocial: '',
      email: '',
      telefono: '',
      interno: ''
    });
  }

  guardarCotizacion(data: CotizacionI){
    Swal.fire({
      title: '¿Enviar cotización?',
      text: 'No puedes deshacer esta acción',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar'
    }).then(result => {
      if (result.value) {

        if (this.cotProdForm.valid) {
          this.cotSvc.saveCotizacion(data).then(()=>{
            Swal.fire('Cotización enviada', 'Recibira su cotización en la brevedad', 'success');
          }).catch(()=>{
            Swal.fire('Error', 'Error al enviar la cotización', 'error');
          });
        } else {
          Swal.fire('Campos requeridos', 'Los campos con un "*" al costado, son campos obligatorios', 'info');
        }
      }
    });
  }
}