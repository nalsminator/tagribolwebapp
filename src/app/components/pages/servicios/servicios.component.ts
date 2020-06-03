import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  unidades: string[];
  tipotrabajo: string[];
  tipoenvase: string[];
  color: string[];
  kiloslitros: string[];
  colorcaja: string[];

  constructor() { }

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
      '250 cc', 
      '500 cc', 
      '1000 cc', 
      '5000 cc', 
      '20000 cc',
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
}