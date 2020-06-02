import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductosService } from "src/app/components/pages/productos/productos.service";
import { ProductoI } from "src/app/shared/models/producto.interface";
import { MatDialog } from "@angular/material/dialog";

import { ModalComponent } from "src/app/shared/components/modal/modal.component";

@Component({
  selector: 'app-show-prod',
  templateUrl: './show-prod.component.html',
  styleUrls: ['./show-prod.component.scss']
})
export class ShowProdComponent implements OnInit {

  public producto$: Observable<ProductoI>;

  constructor(private route: ActivatedRoute, private prodSvc: ProductosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    const idProd = this.route.snapshot.params.id;
    this.producto$ = this.prodSvc.getOneProducto(idProd);
  }

  onCotizarProducto(prod: ProductoI){
    this.openDialog(prod);
  }

  openDialog(prod?: ProductoI):void{
    const config = {
      data: {
        content: prod
      }
    };

    const dialogRef = this.dialog.open(ModalComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
