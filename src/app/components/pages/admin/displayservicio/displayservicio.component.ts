import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ServicioI } from "src/app/shared/models/servicio.interface";
import { ServiciosService } from "src/app/components/pages/servicios/servicios.service";

@Component({
  selector: 'app-displayservicio',
  templateUrl: './displayservicio.component.html',
  styleUrls: ['./displayservicio.component.scss']
})
export class DisplayservicioComponent implements OnInit {

  @Input() servicio: ServicioI;

  constructor(private servSvc: ServiciosService) { }

  ngOnInit(): void {
    this.initValuesForm();
  }

  public servForm = new FormGroup({
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
}