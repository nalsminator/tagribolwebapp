import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-modalcotizar',
  templateUrl: './modalcotizar.component.html',
  styleUrls: ['./modalcotizar.component.scss']
})
export class ModalcotizarComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalcotizarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}