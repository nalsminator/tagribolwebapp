import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServiciosService } from "src/app/components/pages/servicios/servicios.service";
import { ServicioI } from "src/app/shared/models/servicio.interface";

import { MatDialog } from "@angular/material/dialog";
import { ModalservicioComponent } from "src/app/shared/components/modalservicio/modalservicio.component";

@Component({
  selector: 'app-verservicios',
  templateUrl: './verservicios.component.html',
  styleUrls: ['./verservicios.component.scss']
})
export class VerserviciosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['fecha', 'nombreempresa', 'nombreproducto', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true})paginantor: MatPaginator;
  @ViewChild(MatSort, {static: true})sort: MatSort;

  constructor(private servSvc: ServiciosService, public dialog: MatDialog) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginantor;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.servSvc.getAllServicios().subscribe(res => this.dataSource.data = res);
  }

  verServicio(cot: ServicioI):void{
    const config = {
      data: {
        content: cot
      }
    };

    const dialogRef = this.dialog.open(ModalservicioComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}