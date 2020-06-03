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

  selectedEnvase: string = "Elija un envase";

  constructor(private prodSvc: ProductosService, private cotSvc: CotizarService) { }

  public cotProdForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    envasedesc: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    razonsocial: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    interno: new FormControl('')
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

  CambiarEnvaseSelecccionado(newSortOrder: string) { 
    this.selectedEnvase = newSortOrder;
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
        this.cotSvc.saveCotizacion(data).then(()=>{
          Swal.fire('Cotización enviada', 'Recibira su cotización en la brevedad', 'success');
        }).catch(()=>{
          Swal.fire('Error', 'Error al enviar la cotización', 'error');
        });
      }
    });
  }
}