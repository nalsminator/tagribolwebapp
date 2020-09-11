import { Component, OnInit, Input, Inject, LOCALE_ID } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ServicioI } from "src/app/shared/models/servicio.interface";
import { ServiciosService } from "src/app/components/pages/servicios/servicios.service";
import { DatePipe, formatDate } from '@angular/common';

import { PdfMakeWrapper, Columns, Table, Txt } from 'pdfmake-wrapper';

import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-displayservicio',
  templateUrl: './displayservicio.component.html',
  styleUrls: ['./displayservicio.component.scss']
})
export class DisplayservicioComponent implements OnInit {

  @Input() servicio: ServicioI;

  constructor(private servSvc: ServiciosService, public datepipe: DatePipe, @Inject(LOCALE_ID) private locale: string) { }

  transform(timestamp: Timestamp, format?: string): string {
    return formatDate(timestamp.toDate(), format || 'dd/MM/yyyy hh:mm a', this.locale);
  }

  ngOnInit(): void {
    this.initValuesForm();
  }

  public servForm = new FormGroup({
    fecha: new FormControl(''),
    nombreempresa: new FormControl(''),
    nombrecontacto: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    nombreproducto: new FormControl(''),
    grupo: new FormControl(''),
    cantidad: new FormControl(''),
    unidad: new FormControl(''),
    tipotrabajo: new FormControl(''),
    tipoenvase: new FormControl(''),
    color: new FormControl(''),
    medidaenvase: new FormControl(''),
    colorcaja: new FormControl(''),
    ndelote: new FormControl(''),
    fechafabricacion: new FormControl(''),
    fechavencimiento: new FormControl(''),
    otros: new FormControl('')
  });

  private initValuesForm():void{
    this.servForm.patchValue({
      fecha: this.transform(this.servicio.fecha),
      nombreempresa: this.servicio.nombreempresa,
      nombrecontacto: this.servicio.nombrecontacto,
      telefono: this.servicio.telefono,
      email: this.servicio.email,
      nombreproducto: this.servicio.nombreproducto,
      grupo: this.servicio.grupo,
      cantidad: this.servicio.cantidad,
      unidad: this.servicio.unidad,
      tipotrabajo: this.servicio.tipotrabajo,
      tipoenvase: this.servicio.tipoenvase,
      color: this.servicio.color,
      medidaenvase: this.servicio.medidaenvase,
      colorcaja: this.servicio.colorcaja,
      ndelote: this.servicio.ndelote,
      fechafabricacion: this.servicio.fechafabricacion,
      fechavencimiento: this.servicio.fechavencimiento,
      otros: this.servicio.otros
    })
  }

  public GenerarPDF(): void {
    const pdf = new PdfMakeWrapper();
    
    pdf.pageMargins([ 40, 60, 40, 60 ]);

    pdf.add(
      new Table([
        [ new Txt('Solicitud de servicio').bold().end, this.transform(this.servicio.fecha) ],
        [ new Txt('Empresa:').bold().end, this.servicio.nombreempresa],
        [ new Txt('Contacto:').bold().end, this.servicio.nombrecontacto],
        [ new Txt('Teléfono / Celular:').bold().end, this.servicio.cantidad],
        [ new Txt('e-mail:').bold().end, this.servicio.email],
        [ new Txt('Nombre del producto:').bold().end, this.servicio.nombreproducto],
        [ new Txt('Grupo:').bold().end, this.servicio.telefono],
        [ new Txt('Cantidad:').bold().end, this.servicio.cantidad],
        [ new Txt('Unidad:').bold().end, this.servicio.unidad],
        [ new Txt('Tipo de trabajo:').bold().end, this.servicio.tipotrabajo],
        [ new Txt('Tipo de envase:').bold().end, this.servicio.tipoenvase],
        [ new Txt('Color:').bold().end, this.servicio.color],
        [ new Txt('Medida envase:').bold().end, this.servicio.medidaenvase],
        [ new Txt('Color de caja:').bold().end, this.servicio.colorcaja],
        [ new Txt('Nº de lote:').bold().end, this.servicio.ndelote],
        [ new Txt('Fecha de fabricación:').bold().end, this.servicio.fechafabricacion],
        [ new Txt('Fecha de vencimiento:').bold().end, this.servicio.fechavencimiento],
        [ new Txt('Otras indicaciones:').bold().end, this.servicio.otros]
    ]).end
    
    );

    pdf.create().open();
    }

}