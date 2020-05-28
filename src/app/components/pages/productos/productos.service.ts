import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { ProductoI } from "src/app/shared/models/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private afs: AngularFirestore) { }

  public GetAllProductos():Observable<ProductoI[]>{
    return this.afs
    .collection('producto')
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as ProductoI;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  public getOneProducto(id: ProductoI): Observable<ProductoI>{
    return this.afs.doc<ProductoI>(`producto/${id}`).valueChanges();
  }
}