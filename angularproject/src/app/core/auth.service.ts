import { Injectable, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  userEmail: string;
  constructor(
    public angularFireStore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public toastr: ToastrService,

  ) {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.userEmail = user.email
        JSON.parse(localStorage.getItem('user'));

      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  
  SignIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.ngZone.run(() => {
          this.toastr.success('Logged in succesfully!')
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);

      })
      .catch(error => {
        if (error.code == "auth/invalid-email" || "auth/wrong-password") {
          this.toastr.error('Wrong email address or password.')
        }
        else {
          this.toastr.error('Unknown error!')
        }
      });
  }

  SignUp(email: string, password: string) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this.SetUserData(result.user);
        this.toastr.success('Succesfully registered!')
        this.router.navigate(['home']);

      })
      .catch(error => {
        if (error.code == 'auth/email-already-in-use') {
          this.toastr.error('Email already in use!');
        } else if (error.code == 'auth/weak-password') {
          this.toastr.error('Password must be at least 6 characters long.')
        } else if (error.code == 'auth/invalid-email') {
          this.toastr.error('Email format is invalid.')
        } 
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        this.router.navigate(['home']);
      }
    });
  }

  AuthLogin(provider: any) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          this.toastr.error('Email already in use!');
        } else if (error.code == 'auth/weak-password') {
          this.toastr.error('Password must be at least 6 characters long.')
        } else if (error.code == 'auth/invalid-email') {
          this.toastr.error('Email format is invalid.')
        } 
      });
  };

  ForgotPassword(passwordResetEmail: string) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toastr.success('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        this.toastr.error(error);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(
      `users/${user.uid}`,
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  SignOut() {
    return this.angularFireAuth.signOut().then(() => {
      7
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }
}
