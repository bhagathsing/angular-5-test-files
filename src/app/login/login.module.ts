import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routings';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutes
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
