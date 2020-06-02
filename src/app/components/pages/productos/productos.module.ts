import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { MatCardModule } from '@angular/material/card';
import { ShowProdComponent } from './show-prod/show-prod.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [ProductosComponent, ShowProdComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class ProductosModule { }
