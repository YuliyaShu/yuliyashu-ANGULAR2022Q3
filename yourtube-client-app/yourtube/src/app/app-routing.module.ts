import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './youtube/main/main.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { LoginGuard } from './auth/login/login.guard';
import { LoginService } from './auth/login/login.service';

const routes: Routes = [
  {
    path: 'video',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [LoginGuard],
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginService, LoginGuard],
})
export class AppRoutingModule {}
