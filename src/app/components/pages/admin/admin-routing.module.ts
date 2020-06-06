import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AuthGuard } from "src/app/shared/guards/auth.guard";

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate:[AuthGuard],
    children: [
      { 
        path: 'vercotizaciones', 
        loadChildren: () => 
        import('src/app/components/pages/admin/vercotizaciones/vercotizaciones.module').then(m => m.VercotizacionesModule) 
      },
      { 
        path: 'verservicios', 
        loadChildren: () => 
        import('src/app//components/pages/admin/verservicios/verservicios.module').then(m => m.VerserviciosModule) 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }