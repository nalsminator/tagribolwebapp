import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/components/pages/login/login.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public loginSvc: LoginService) { }

  ngOnInit(): void {
  }

  onLogOut(): void {
    this.loginSvc.logout();
  }
}
