import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import  { ModalModule } from 'angular-custom-modal'
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule , MatInputModule } from '@angular/material';


import { AllmodalComponent } from './components/allmodal/allmodal.component';
import { ComponentAsModalComponent } from './components/component-as-modal/component-as-modal.component';

const modalRoutes: Routes = [
    { path: 'example', component: AllmodalComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(modalRoutes),
    ModalModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [AllmodalComponent, ComponentAsModalComponent]
})



export class ModalDemoModule { }
