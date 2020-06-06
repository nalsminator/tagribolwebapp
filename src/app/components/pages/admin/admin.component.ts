import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/components/pages/login/login.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public loginSvc: LoginService) { }

  ngOnInit(): void {
  }

  onLogOut(): void {
    this.loginSvc.logout();
  }

}
