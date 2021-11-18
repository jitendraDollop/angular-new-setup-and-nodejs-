import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProfilesComponent } from './component/all-profiles/all-profiles.component';
import { CreateProfileComponent } from './component/create-profile/create-profile.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { ImageUploadMultiComponent } from './pages/image-upload-multi/image-upload-multi.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProfilesComponent,
    CreateProfileComponent,
    PaginationComponent,
    JwPaginationComponent,
    ImageUploadMultiComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
