import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-basic-map',
  templateUrl: './basic-map.component.html',
  styleUrls: ['./basic-map.component.css']
})
export class BasicMapComponent {

  zoom: number = 5;
  lat: number = 22.160311576947638;
  lng: number = 78.9860984375;

  clickedMarker(m: marker, index: number) {
    console.log('clicked the marker: ',m);
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false,
      name:'New Marker'
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    window.alert('New Location: '+ $event.coords.lat + ', ' + $event.coords.lng);
  }
  
  markers: marker[] = [
	  {
		  lat: 22.5726,
		  lng: 88.3639,
		  label: 'K',
		  name:'Kolkata',
		  draggable: false,
	  },
	  {
		  lat: 28.7041,
		  lng: 77.1025,
		  label: 'D',
		  name:'Delhi',
		  draggable: false
	  },
	  {
		  lat: 19.0760,
		  lng: 72.8777,
		  label: 'M',
		  name:'Mumbai',
		  draggable: true
	  }
  ]

}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	name?:String;
	animation?:any;
	draggable: boolean;
}