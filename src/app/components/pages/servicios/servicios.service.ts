import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { ServicioI } from "src/app/shared/models/servicio.interface";
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public fechactual = new Date;

  private servicioCollection: AngularFirestoreCollection<ServicioI>;

  constructor(private afs: AngularFirestore) { 
    this.servicioCollection = afs.collection<ServicioI>('servicio');
  }

  public getAllServicios():Observable<ServicioI[]>{
    return this.servicioCollection
      .snapshotChanges()
      .pipe(
        map(actions => 
          actions.map(a => {
            const data = a.payload.doc.data() as ServicioI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public saveServicio(serv: ServicioI){
    const servObj = {
      fecha: this.fechactual,
      nombreempresa: serv.nombreempresa,
      nombrecontacto: serv.nombrecontacto,
      telefono: serv.telefono,
      email: serv.email,
      nombreproducto: serv.nombreproducto,
      grupo: serv.grupo,
      cantidad: serv.cantidad,
      unidad: serv.unidad,
      tipotrabajo: serv.tipotrabajo,
      tipoenvase: serv.tipoenvase,
      color: serv.color,
      medidaenvase: serv.medidaenvase,
      colorcaja: serv.colorcaja,
      ndelote: serv.ndelote,
      fechafabricacion: serv.fechafabricacion,
      fechavencimiento: serv.fechavencimiento,
      otros: serv.otros
    };

    return this.servicioCollection.add(servObj);
  }

}