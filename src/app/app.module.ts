import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { routes } from './app-routing.module'
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { IndexModule } from './index/index.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ValidatorModule } from './validator/validator.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{useHash:true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcawHwsrebOY57-xz4jeWXubQwhRpSdFI',
      libraries: ['places','geometry','drawing']
    }),
    IndexModule,
    // ValidatorModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
