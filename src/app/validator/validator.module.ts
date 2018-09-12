import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule , MatInputModule } from '@angular/material';

import { FormValidator,EmailValidator } from './directives/ui-form-validator';


import { BasicFormComponent } from './components/basic-form/basic-form.component';

const validationRoutes: Routes = [
    { path: 'validation', component: BasicFormComponent },
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(validationRoutes),
     FormsModule,ReactiveFormsModule,
     MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,MatInputModule
  ],
  declarations: [BasicFormComponent,FormValidator,EmailValidator],
  exports:[
  FormValidator,EmailValidator]
})
export class ValidatorModule { }
