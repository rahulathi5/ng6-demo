import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { BasicMapComponent } from './modules/basic-map/basic-map.component';
// import { SearchLocationComponent } from './components/search-location/search-location.component';
// import { PolygonViewComponent } from  './components/polygon-view/polygon-view.component';
// import { DrawingManagerComponent } from './components/drawing-manager/drawing-manager.component';
import { WelcomeComponent } from './index/components/welcome/welcome.component';


export const routes: Routes = [
	{
		path:'map',
		loadChildren: './map/map.module#MapModule'
	},
	{ 
		path: '', 
		redirectTo: '/auth', 
		pathMatch: 'full' 
	},	
	{
		path:'welcome',
		component:WelcomeComponent
	},
	{
		path:'form',
		loadChildren:'./validator/validator.module#ValidatorModule'
	},
	{
		path:'modal',
		loadChildren:'./modal/modal.module#ModalDemoModule'
	},{
		path: 'auth',
		loadChildren:'./login/login.module#LoginModule'
	},{
		path: 'dashboard',
		loadChildren:'./dashboard/dashboard.module#DashboardModule'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
