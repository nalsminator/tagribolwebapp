import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenajeRoutingModule } from './almacenaje-routing.module';
import { AlmacenajeComponent } from './almacenaje.component';


@NgModule({
  declarations: [AlmacenajeComponent],
  imports: [
    CommonModule,
    AlmacenajeRoutingModule
  ]
})
export class AlmacenajeModule { }
