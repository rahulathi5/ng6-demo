import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
} from '@angular/material';

const dashboardRoutes: Routes = [
    { path: 'home', component: HomeComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    // BrowserAnimationsModule,
	FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule,
  MatSliderModule,
  MatFormFieldModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
