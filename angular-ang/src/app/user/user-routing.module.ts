import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from '../user/user.component';
import { UsersComponent } from './pages/users/users.component';

import { BeforLoginGuard } from './guard/befor-login.guard';
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FilesComponent } from './pages/files/files.component';
import { AfterloginGuard } from './guard/afterlogin.guard';
const routes: Routes = [
  {
    path : "",
    component : UserComponent,
    children : [
      {
        path : "",
        canActivate : [AfterloginGuard],
        component : HomeComponent
      },
      {
        path : "signup",
        component : SignupComponent
      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "profile",
        canActivate : [BeforLoginGuard],
        component : ProfileComponent
      },
      {
        path : "profile/add",
        canActivate : [BeforLoginGuard],
        component : AddProfileComponent
      },
      {
        path : "profile/edit/:id",
        canActivate : [BeforLoginGuard],
        component : EditProfileComponent
      },
      {
        path : "files",
        canActivate : [BeforLoginGuard],
        component : FilesComponent
      },
      {
        path : "users",
        canActivate : [BeforLoginGuard],
        component : UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
