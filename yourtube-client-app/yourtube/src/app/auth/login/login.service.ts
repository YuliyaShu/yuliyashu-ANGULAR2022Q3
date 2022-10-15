import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginFields } from '../../core/interfaces/LoginFields';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  data = {
    token: '',
    isLogin: !!(localStorage.getItem('token')),
  }
  private loginData = new BehaviorSubject(this.data);
  constructor(private router: Router) {}

  setLoginData(data: LoginFields) {
    this.data.token = JSON.stringify(data);
    this.data.isLogin = true;
    localStorage.setItem('token', this.data.token);
    localStorage.setItem('login', data.login!);
    this.loginData.next(this.data);
  }

  getLoginData() {
    return this.loginData;
  }

  deleteLoginData() {
    this.data.token = '';
    this.data.isLogin = false;
    localStorage.removeItem('token');
    localStorage.removeItem('login');
    document.location.pathname = 'login';
  }

  isAuthenticated() {
    return this.data.isLogin;
  }
}
