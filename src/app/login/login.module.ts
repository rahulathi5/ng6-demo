import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent  },
];

@NgModule({
  imports: [
     CommonModule,
    RouterModule.forChild(loginRoutes),
    MatCardModule,
  MatInputModule,
  MatButtonModule,
  // BrowserModule,
FormsModule,
ReactiveFormsModule
  ],
  exports:[
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  // BrowserModule,
FormsModule,
ReactiveFormsModule],
  declarations: [LoginComponent]
})
export class LoginModule { }
