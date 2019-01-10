import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UnauthorizedCanActivate } from './framework/canActivate/unauthorized.canActivate';
import { AuthorizedCanActivate } from './framework/canActivate/authorized.canActivate';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: LoginComponent,
    canActivate: [UnauthorizedCanActivate]

  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UnauthorizedCanActivate]

  },
  {
    path: 'signout',
    component: LogoutComponent,
    canActivate: [AuthorizedCanActivate]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
