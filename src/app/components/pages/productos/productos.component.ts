import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from "src/app/components/pages/productos/productos.service";
import { ProductoI } from "src/app/shared/models/producto.interface";
import { MatDialog } from '@angular/material/dialog';
import { ShowProdComponent } from "src/app/components/pages/productos/show-prod/show-prod.component";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public productos$: Observable<ProductoI[]>;

  constructor(private productoSvc: ProductosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productos$ = this.productoSvc.GetAllProductos();
  }

  openDialog(prod: ProductoI) {

    const conf = {
      data: {
        content: prod
      }
    }

    this.dialog.open(ShowProdComponent, conf);
  }

}
