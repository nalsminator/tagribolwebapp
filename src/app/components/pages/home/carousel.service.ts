import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { SlideI } from "src/app/shared/models/slide.interface";

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private afs: AngularFirestore) { }

  public GetAllSlides():Observable<SlideI[]>{
    return this.afs.collection('slides')
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as SlideI;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
