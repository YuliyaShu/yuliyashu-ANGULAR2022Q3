import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login/login.service';
import { LogOutDialogComponent } from './log-out-dialog/log-out-dialog.component';
import { SortService } from './sort/sort.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  settingsOn = false;
  result = this.sortService.getSettingsOn().subscribe((value) => {
    this.settingsOn = value;
    return value;
  });
  count = 0;
  isLogin = !!(localStorage.getItem('token'));
  login = localStorage.getItem('login') || 'Guest';
  getLoginData = this.loginData.getLoginData().subscribe((data) => {
    if (data.token) {
      this.login = JSON.parse(data.token).login!;
    }
  })

  constructor(
    private sortService: SortService,
    private router: Router,
    private loginData: LoginService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onSettings() {
    if (this.count % 2) {
      this.settingsOn = false;
    } else {
      this.settingsOn = true;
    }
    this.count += 1;
    this.sortService.setSettingsOn(this.settingsOn);
  }

  isRoute(route: string) {
    return !(this.router.url.includes(route));
  }

  openDialog() {
    this.dialog.open(LogOutDialogComponent);
  }
}
