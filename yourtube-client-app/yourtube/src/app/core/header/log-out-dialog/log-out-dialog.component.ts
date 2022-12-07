import { Component } from '@angular/core';
import { LoginService } from '../../../auth/login/login.service';

@Component({
  selector: 'app-log-out-dialog',
  templateUrl: './log-out-dialog.component.html',
  styleUrls: ['./log-out-dialog.component.scss'],
})
export class LogOutDialogComponent {
  constructor(private loginData: LoginService) { }

  removeLoginData() {
    this.loginData.deleteLoginData();
  }
}
