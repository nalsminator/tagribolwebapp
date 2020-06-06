import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerserviciosComponent } from './verservicios.component';

const routes: Routes = [{ path: '', component: VerserviciosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerserviciosRoutingModule { }
