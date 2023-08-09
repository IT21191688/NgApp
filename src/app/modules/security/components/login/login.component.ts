import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AngularFireAuth) {}

  GoogleAuth() {
    const googleProvider = new GoogleAuthProvider();
    return this.trigger(googleProvider);
  }

  trigger(provider: any): any {
    try {
      return this.auth.signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          console.log('You have been successfully logged in with Google!');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    /*
    this.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('Successfully logged in with email and password:', response);
      })
      .catch(error => {
        console.log('Error logging in:', error);
      });
  }
  */
  }
}
