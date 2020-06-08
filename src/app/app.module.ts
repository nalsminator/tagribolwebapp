import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { CotizarComponent } from "./components/pages/productos/cotizar/cotizar.component";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';

import { AngularFireAuthModule } from "@angular/fire/auth";

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDialogModule } from "@angular/material/dialog";
import { ModalComponent } from './shared/components/modal/modal.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { DisplaycotizacionComponent } from "src/app/components/pages/admin/displaycotizacion/displaycotizacion.component";
import { DisplayservicioComponent } from "src/app/components/pages/admin/displayservicio/displayservicio.component";
import { ModalcotizarComponent } from './shared/components/modalcotizar/modalcotizar.component';
import { ModalservicioComponent } from './shared/components/modalservicio/modalservicio.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    CotizarComponent,
    ModalcotizarComponent,
    DisplaycotizacionComponent,
    ModalservicioComponent,
    DisplayservicioComponent,
    FooterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    AngularFireAuthModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgbModule],
  entryComponents: [ModalComponent, ModalcotizarComponent, ModalservicioComponent]
})
export class AppModule { }
