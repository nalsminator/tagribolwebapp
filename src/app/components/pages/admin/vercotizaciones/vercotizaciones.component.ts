import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CotizarService } from '../../productos/cotizar/cotizar.service';
import { CotizacionI } from "src/app/shared/models/cotizacion.interface";

import { MatDialog } from "@angular/material/dialog";
import { ModalcotizarComponent } from "src/app/shared/components/modalcotizar/modalcotizar.component";

@Component({
  selector: 'app-vercotizaciones',
  templateUrl: './vercotizaciones.component.html',
  styleUrls: ['./vercotizaciones.component.scss']
})
export class VercotizacionesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fecha', 'razonsocial', 'nombre', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true})paginantor: MatPaginator;
  @ViewChild(MatSort, {static: true})sort: MatSort;

  constructor(private cotSvc: CotizarService, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginantor;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.cotSvc.getAllCotizaciones().subscribe(res => this.dataSource.data = res);
  }

  verCotizacion(cot: CotizacionI):void{
    const config = {
      data: {
        content: cot
      }
    };

    const dialogRef = this.dialog.open(ModalcotizarComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}