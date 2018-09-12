import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BasicMapComponent } from './components/basic-map/basic-map.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { PolygonViewComponent } from './components/polygon-view/polygon-view.component';
import { DrawingManagerComponent } from './components/drawing-manager/drawing-manager.component';

const mapRoutes: Routes = [
    { path: 'basic-map', component: BasicMapComponent },
    { path: 'search-location', component: SearchLocationComponent},
    { path: 'polygon-view', component: PolygonViewComponent},
    { path: 'draw-ploygon', component : DrawingManagerComponent}
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(mapRoutes),
     FormsModule,ReactiveFormsModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcawHwsrebOY57-xz4jeWXubQwhRpSdFI',
      libraries: ['places','geometry','drawing']
    }),
  ],
  declarations: [BasicMapComponent, SearchLocationComponent, PolygonViewComponent, DrawingManagerComponent]
})
export class MapModule { }
