import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/components/pages/login/login.service';
import { UserI } from 'src/app/shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: LoginService, private route: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required), 
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  onLogin(form: UserI){
    this.authSvc
    .loginByEmail(form)
    .then(res => {
      console.log('Succesfully', res);
      this.route.navigate(['/']);
      window.location.href = '/admin';
    })
    .catch(err => console.log('Error', err));
  }

}
