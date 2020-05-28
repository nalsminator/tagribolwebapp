import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowComponent } from './shared/components/slideshow/slideshow.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";
import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    ToolbarComponent,
    ContainerAppComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgbModule]
})
export class AppModule { }
