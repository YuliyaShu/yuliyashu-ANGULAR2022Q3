import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginFields } from '../../core/interfaces/LoginFields';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  });
  controlLogin = this.authForm.get('login') as FormControl;
  controlPassword = this.authForm.get('password') as FormControl;

  constructor(private router: Router, private login: LoginService) { }

  ngOnInit(): void {
  }

  onSubmitButton() {
    // eslint-disable-next-line no-empty
    if (this.authForm.invalid) {}
    // const data = this.authForm.value as LoginFields;
    // this.login.signUp(data).subscribe((resp) => {
    //   if ('id' in resp) {
    //     this.login
    //       .logIn({
    //         login: data.login,
    //         password: data.password,
    //       })
    //       .subscribe((resp) => {
    //         if ('token' in resp) {
    //           localStorage.setItem('token', resp.token);
    //           this.router.navigateByUrl('/main');
    //         }
    //       });
    //   } else if ('noConnection' in resp) {
    //     this.addInfoAboutError('no Internet Connection, failed to sign up');
    //   } else if ('userIsExist' in resp) {
    //     this.addInfoAboutError(
    //       "user's login is already exist, change your login",
    //     );
    //   } else {
    //     this.addInfoAboutError('failed to sign up, try later');
    //   }
    // });
  }

  addInfoAboutError(text: string) {
    console.log(text);
  }
}
