import { Component, OnInit, Input, Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CotizacionI } from "src/app/shared/models/cotizacion.interface";
import { CotizarService } from "src/app/components/pages/productos/cotizar/cotizar.service";
import { PdfMakeWrapper, Columns, Table, Txt } from 'pdfmake-wrapper';
import { DatePipe, formatDate } from '@angular/common';

import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-displaycotizacion',
  templateUrl: './displaycotizacion.component.html',
  styleUrls: ['./displaycotizacion.component.scss']
})

export class DisplaycotizacionComponent implements OnInit {

  @Input() cotizacion: CotizacionI;

  public nrotelf: string;

  constructor(private cotSvc: CotizarService, public datepipe: DatePipe, @Inject(LOCALE_ID) private locale: string) { }

  transform(timestamp: Timestamp, format?: string): string {
    return formatDate(timestamp.toDate(), format || 'dd/MM/yyyy hh:mm a', this.locale);
  }

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

  public initValuesForm():void{
    this.cotProdForm.patchValue({
      fecha: this.transform(this.cotizacion.fecha),
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

   public GenerarPDF(): void {
    const pdf = new PdfMakeWrapper();
    
    pdf.pageMargins([ 40, 60, 40, 60 ]);

    pdf.add(
      new Table([
        [ new Txt('Solicitud de cotización').bold().end, this.transform(this.cotizacion.fecha) ],
        [ new Txt('Producto:').bold().end, this.cotizacion.nombre],
        [ new Txt('Envase:').bold().end, this.cotizacion.envasedesc],
        [ new Txt('Cantidad:').bold().end, this.cotizacion.cantidad],
        [ new Txt('Razon social:').bold().end, this.cotizacion.razonsocial],
        [ new Txt('e-mail:').bold().end, this.cotizacion.email],
        [ new Txt('Teléfono:').bold().end, this.cotizacion.telefono],
        [ new Txt('Interno:').bold().end, this.cotizacion.interno],
    ]).end
    
    );

    pdf.create().open();
    }
}