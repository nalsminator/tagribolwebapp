import { Component, OnInit, ViewChild } from '@angular/core';
import { EnvasesService } from "src/app/components/pages/envases/envases.service";
import { EnvaseI } from "src/app/shared/models/envase.interface";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envases',
  templateUrl: './envases.component.html',
  styleUrls: ['./envases.component.scss']
})
export class EnvasesComponent implements OnInit {

  public envases$: Observable<EnvaseI[]>;

  constructor(private envaseSvc: EnvasesService) { }

  ngOnInit(): void {
    this.envases$ = this.envaseSvc.GetAllEnvases();
  }
}