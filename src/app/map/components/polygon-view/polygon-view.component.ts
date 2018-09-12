import { Component,SimpleChanges,OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-polygon-view',
  templateUrl: './polygon-view.component.html',
  styleUrls: ['./polygon-view.component.css']
})
export class PolygonViewComponent implements OnInit {

  zoom: number = 4;
  latitude: number = 22.160311576947638;
  longitude: number = 77.1025;  
  polygonColor:String = '#ea4234';
  latlngBounds=[
  	{ lat: 22.5726,  lng: 88.3639 },
    { lat:  28.7041,  lng: 77.1025 },
   	{ lat: 19.0760, lng: 72.8777 },
  ];
  zoneList;
  constructor(){        
  }

  ngOnInit(){
  	this.zoneList =[{
	    "zoneID": "594dff0ee10452d8567b23c5",
	    "strokeColor": "#ea4234",
	    "strokeWeight": 2,
	    "fillColor": "#ea4234",
	    "draggable": false,
	    "editable": false,
	    "visible": true,
	    "paths": [
		    {
		      "lat": 22.5726,
		      "lng": 88.3639
		    },
		    {
		      "lat": 28.7041,
		      "lng": 77.1025
		    },
		    {
		      "lat": 19.0760,
		      "lng": 72.8777
		    }]
	  },{
		  "zoneID": "594dff0ee10452d8567b23c6",
		  "strokeColor": "#ea4234",
		  "strokeWeight": 2,
		  "fillColor": "#ea4234",
		  "draggable": false,
		  "editable": false,
		  "visible": true,
		  "paths": [
			  {
			    "lat": 12.9716,
			    "lng": 77.5946
			  },
			  {
			    "lat": 13.0827,
			    "lng": 80.2707
			  },
			  {
			    "lat": 9.9252,
			    "lng": 78.1198
			  }]
		}]
  }
}
