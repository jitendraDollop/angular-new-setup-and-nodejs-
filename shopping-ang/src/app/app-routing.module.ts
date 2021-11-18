import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import("./user/user.module").then(module1=>module1.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import("./admin/admin.module").then(module2=>module2.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
