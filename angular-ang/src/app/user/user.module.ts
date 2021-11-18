import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { UserService } from './services/user.service';
import { AddProfileComponent } from './pages/add-profile/add-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { FilesComponent } from './pages/files/files.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [UserComponent, HomeComponent, SignupComponent, LoginComponent, ProfileComponent, HeaderComponent, AddProfileComponent, EditProfileComponent, FilesComponent, UsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [LoginService, SignupService, UserService]
})
export class UserModule { }
