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
  isLogin = !!(localStorage.getItem('token'));
  login = localStorage.getItem('login') || 'Guest';

  constructor(
    private sortService: SortService,
    private router: Router,
    private loginData: LoginService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.sortService.getSettingsOn().subscribe((value) => {
      this.settingsOn = value;
      return value;
    });
    this.loginData.getLoginData().subscribe((data) => {
      if (data.token) {
        this.login = JSON.parse(data.token).login!;
      }
    });
  }

  onSettings() {
    this.settingsOn = !this.settingsOn;
    this.sortService.setSettingsOn(this.settingsOn);
  }

  isRoute(route: string) {
    return !(this.router.url.includes(route));
  }

  openDialog() {
    this.dialog.open(LogOutDialogComponent);
  }
}
