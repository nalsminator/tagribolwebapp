import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerserviciosRoutingModule } from './verservicios-routing.module';
import { VerserviciosComponent } from './verservicios.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VerserviciosComponent],
  imports: [
    CommonModule,
    VerserviciosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ]
})
export class VerserviciosModule { }
