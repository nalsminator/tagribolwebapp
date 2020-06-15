import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/components/pages/login/login.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public loginSvc: LoginService) { }
  
  ngOnInit(): void {
  }

  onLogOut(): void {
    this.loginSvc.logout();
  }

  public myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      if (x.className === "topnav responsive") {
         x.className = "topnav";
      }
    }
  }
}