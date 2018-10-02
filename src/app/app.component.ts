import { Component,SimpleChanges,OnChanges,ViewChild } from '@angular/core';
import { MouseEvent, AgmPolygon, AgmMap,MapsAPILoader } from '@agm/core';

declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-ng2-app';
//   zoom: number = 5;
//   lat: number = 22.160311576947638;
//   lng: number = 78.9860984375;
//   latlngBounds=[
//   	{ lat: 22.5726,  lng: 88.3639 },
//      { lat:  28.7041,  lng: 77.1025 },
//    { lat: 19.0760, lng: 72.8777 },
//   ];
//   polygonColor:String = '#ea4234';
//   drawingManager;
//   constructor(private _mapsAPILoader: MapsAPILoader){        
//   }
//   @ViewChild(AgmPolygon) polygon: any;
//   @ViewChild(AgmMap) map: any;
//   // polygon: any;
//   ngOnInit(){
//     console.log(this.map);
//     // this.map.fitBounds = { lat: 22.5726,  lng: 88.3639 };
//     this.zoneList.forEach(zone=>{
//       this.map._mapsWrapper.createPolygon(zone)
//       .then((polygon: any) => {
//       this.polygon = polygon;
//         this.polygon.getPath().b.forEach(each =>{
//           console.log(each.lat(),each.lng());
//         })
//     });
//     })
//   }

//   ngAfterViewInit() {
//   this._mapsAPILoader.load().then(() => {
//     // Place your code in here...
//     console.log(google);
//     this.drawingManager = new google.maps.drawing.DrawingManager({
//       drawingMode: google.maps.drawing.OverlayType.POLYGON,
//       drawingControl: true,
//       drawingControlOptions: {
//         position: google.maps.ControlPosition.TOP_CENTER,
//         drawingModes: ['polygon']
//       }
//     });
//     this.drawingManager.setMap();
//   });
// }

  


//   clickedMarker(label: string, index: number) {
//     console.log(`clicked the marker: ${label || index}`)
//   }
  
//   mapClicked($event: MouseEvent) {
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng,
//       draggable: true
//     });
//   }
  
//   markerDragEnd(m: marker, $event: MouseEvent) {
//     console.log('dragEnd', m, $event);
//   }

//   onPathChanged(event){
//   	console.log(event);
//   }
  
//   markers: marker[] = [
// 	  {
// 		  lat: 22.5726,
// 		  lng: 88.3639,
// 		  label: 'K',
// 		  name:'Kolkata',
// 		  draggable: false,
// 	  },
// 	  {
// 		  lat: 28.7041,
// 		  lng: 77.1025,
// 		  label: 'D',
// 		  name:'Delhi',
// 		  draggable: false
// 	  },
// 	  {
// 		  lat: 19.0760,
// 		  lng: 72.8777,
// 		  label: 'M',
// 		  name:'Mumbai',
// 		  draggable: true
// 	  }
//   ]

//   zoneList =[
//   {
//     "zoneID": "594dff0ee10452d8567b23c5",
//     "strokeColor": "#ea4234",
//     "strokeWeight": 2,
//     "fillColor": "#ea4234",
//     "draggable": false,
//     "editable": false,
//     "visible": true,
//     "paths": [
//     {
//       "lat": 22.5726,
//       "lng": 88.3639
//     },
//     {
//       "lat": 28.7041,
//       "lng": 77.1025
//     },
//     {
//       "lat": 19.0760,
//       "lng": 72.8777
//     } ]
//   },
//   {
//   "zoneID": "594dff0ee10452d8567b23c6",
//   "strokeColor": "#ea4234",
//   "strokeWeight": 2,
//   "fillColor": "#ea4234",
//   "draggable": false,
//   "editable": false,
//   "visible": true,
//   "paths": [
//   {
//     "lat": 12.9716,
//     "lng": 77.5946
//   },
//   {
//     "lat": 13.0827,
//     "lng": 80.2707
//   },
//   {
//     "lat": 9.9252,
//     "lng": 78.1198
//   } ]
// }]

//   hoverOnPolygon(event){
//   	// console.log(event.va.type);
//   	this.polygonColor = '#0c66a1';  	
//   }

//   hoverOutPolygon(event){
//   	// console.log(event.va.type);
//   	this.polygonColor = '#ea4234';  	
//   }

  // getPath() {
  //     console.log('here',this.polygon);
  //      this.polygon.getPath().b.forEach(each =>{
  //       console.log(each.lat(),each.lng());
  //     })
  //     // console.log(polygon.getpaths());
  //  // polygon.getPath().then((x: any[]) => {
  //  //    x.forEach(y => {
  //  //      console.log('-');
  //  //      y.forEach(z => console.log(z.lat(), z.lng()));
  //  //    });
  //  //  });
  // }

}

// just an interface for type safety.
// interface marker {
// 	lat: number;
// 	lng: number;
// 	label?: string;
// 	name?:String;
// 	animation?:any;
// 	draggable: boolean;
// }

