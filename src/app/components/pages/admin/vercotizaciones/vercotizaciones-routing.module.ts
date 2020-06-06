import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercotizacionesComponent } from './vercotizaciones.component';

const routes: Routes = [{ path: '', component: VercotizacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VercotizacionesRoutingModule { }
