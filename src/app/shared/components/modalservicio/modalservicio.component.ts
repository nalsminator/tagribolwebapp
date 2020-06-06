import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-modalservicio',
  templateUrl: './modalservicio.component.html',
  styleUrls: ['./modalservicio.component.scss']
})
export class ModalservicioComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalservicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}