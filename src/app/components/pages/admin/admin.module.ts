import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
//import { DisplaycotizacionComponent } from './displaycotizacion/displaycotizacion.component';
//import { DisplayservicioComponent } from './displayservicio/displayservicio.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
