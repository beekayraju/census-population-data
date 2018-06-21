import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

   user = {
   email: '',
   password: '',
}
    email = '';
    password = '';
    errorMessage = '';
    error: { name: string, message: string } = { name: '', message: '' }

constructor(private authService: AuthService, private router: Router) {
  }

signInWithEmail() {
      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['/home']);
        })
        .catch((err) => console.log('error: ' + err));
    }

    ngOnInit(){
        
    }

checkUserInfo() {
    if (this.authService.isUserEmailLoggedIn) {
      this.router.navigate(['/home'])
    }
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }



  onSignUp(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.authService.signInRegular(this.email, this.password)
        .then(() => {
          this.router.navigate(['/home'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }

  onLoginEmail(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.authService.signInRegular(this.email, this.password)
        .then(() => this.router.navigate(['/home']))
        .catch(_error => {
          this.error = _error
          this.router.navigate(['/'])
        })
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }

    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false
    }

    this.errorMessage = ''

    return true
  }

  isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
      return false;
    }

    return true;
  }

}