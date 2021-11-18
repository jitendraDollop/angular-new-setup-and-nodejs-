import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';


import { SignupService } from './services/signup.service';
import { LoginComponent } from './pages/login/login.component';
import { ModalService } from '../services/modal.service';
import { LoginService } from './services/login.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [UserComponent, HomeComponent, AboutComponent, ContactComponent, HeaderComponent, FooterComponent, SignupComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers : [SignupService, ModalService, LoginService]
})
export class UserModule { }
