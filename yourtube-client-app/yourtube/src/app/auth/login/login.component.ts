import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginFields } from '../../core/interfaces/LoginFields';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  authForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    ]),
  });
  controlLogin = this.authForm.get('login') as FormControl;
  controlPassword = this.authForm.get('password') as FormControl;

  constructor(private login: LoginService) { }

  onSubmitButton() {
    if (this.authForm.invalid) {
      return;
    }
    const data = this.authForm.value as LoginFields;
    this.login.setLoginData(data);
    document.location.pathname = '';
  }
}
