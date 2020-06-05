import { Injectable } from '@angular/core';
import { UserI } from 'src/app/shared/models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.userData = afAuth.authState;
   }

   loginByEmail(user: UserI) {
    const { email, password } = user;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.signOut();
  }

}
