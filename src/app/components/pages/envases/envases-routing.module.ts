import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvasesComponent } from './envases.component';

const routes: Routes = [{ path: '', component: EnvasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvaseRoutingModule { }
