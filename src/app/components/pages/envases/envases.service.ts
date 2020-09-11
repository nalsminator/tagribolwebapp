import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { EnvaseI } from "src/app/shared/models/envase.interface";

@Injectable({
  providedIn: 'root'
})
export class EnvasesService {

  constructor(private afs: AngularFirestore) { }

  public GetAllEnvases():Observable<EnvaseI[]>{
    return this.afs.collection('envase', ref => ref.orderBy('position'))
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as EnvaseI;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
