import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VercotizacionesRoutingModule } from './vercotizaciones-routing.module';
import { VercotizacionesComponent } from './vercotizaciones.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VercotizacionesComponent],
  imports: [
    CommonModule,
    VercotizacionesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
})
export class VercotizacionesModule { }
