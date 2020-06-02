import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

import { CotizacionI } from "src/app/shared/models/cotizacion.interface";

@Injectable({
  providedIn: 'root'
})
export class CotizarService {

  public fechactual = new Date;

  private cotizacionCollection: AngularFirestoreCollection<CotizacionI>;

  constructor(private afs: AngularFirestore) { 
    this.cotizacionCollection = afs.collection<CotizacionI>('cotizacion');
  }

  public saveCotizacion(cot: CotizacionI){
    const cotObj = {
      fecha: this.fechactual,
      nombre: cot.nombre,
      envasedesc: cot.envasedesc,
      cantidad: cot.cantidad,
      razonsocial: cot.razonsocial,
      email: cot.email,
      telefono: cot.telefono,
      interno: cot.interno
    };

    return this.cotizacionCollection.add(cotObj);
  }  
}