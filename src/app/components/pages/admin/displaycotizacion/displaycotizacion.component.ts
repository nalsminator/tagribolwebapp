import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CotizacionI } from "src/app/shared/models/cotizacion.interface";
import { CotizarService } from "src/app/components/pages/productos/cotizar/cotizar.service";

@Component({
  selector: 'app-displaycotizacion',
  templateUrl: './displaycotizacion.component.html',
  styleUrls: ['./displaycotizacion.component.scss']
})
export class DisplaycotizacionComponent implements OnInit {

  @Input() cotizacion: CotizacionI;

  public nrotelf: string;

  constructor(private cotSvc: CotizarService) { }

  ngOnInit(): void {
    this.initValuesForm();
  }

  public cotProdForm = new FormGroup({
    fecha: new FormControl(''),
    nombre: new FormControl(''),
    envasedesc: new FormControl(''),
    cantidad: new FormControl(''),
    razonsocial: new FormControl(''),
    email: new FormControl(''),
    telefono: new FormControl(''),
    interno: new FormControl('')
  });

  private initValuesForm():void{
    this.cotProdForm.patchValue({
      fecha: this.cotizacion.fecha,
      nombre: this.cotizacion.nombre,
      envasedesc: this.cotizacion.envasedesc,
      cantidad: this.cotizacion.cantidad,
      razonsocial: this.cotizacion.razonsocial,
      email: this.cotizacion.email,
      telefono: this.cotizacion.telefono,
      nrotelf: this.cotizacion.telefono,
      interno: this.cotizacion.interno
    });
  }
}