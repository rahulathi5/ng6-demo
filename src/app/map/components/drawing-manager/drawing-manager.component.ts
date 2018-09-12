import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent, AgmPolygon, AgmMap,MapsAPILoader } from '@agm/core';
declare var google: any;
@Component({
  selector: 'app-drawing-manager',
  templateUrl: './drawing-manager.component.html',
  styleUrls: ['./drawing-manager.component.css']
})
export class DrawingManagerComponent implements OnInit {

  zoom: number = 5;
  lat: number = 22.78631;
  lng: number = 88.40698;

  polygonColor:String = '#ea4234';
  drawingManager;
  allpolygons=[];
  polygon;
  constructor(private _mapsAPILoader: MapsAPILoader){        
  }
  // @ViewChild(AgmPolygon) polygon: any;
  // @ViewChild(AgmMap) map: any;
  // polygon: any;
  // ngOnInit(){
    // console.log(this.map);
    // this.zoneList.forEach(zone=>{
    //   this.map._mapsWrapper.createPolygon(zone)
    //   .then((polygon: any) => {
    //   this.polygon = polygon;
    //     this.polygon.getPath().b.forEach(each =>{
    //       console.log(each.lat(),each.lng());
    //     })
    // });
    // })
  // }

  ngOnInit() {
  this._mapsAPILoader.load().then(() => {
    // Place your code in here...
    let mapOptions = {
      zoom: 7,
      mapTypeId:  google.maps.MapTypeId.ROADMAP,
      draggable:true,
      center: new google.maps.LatLng(this.lat, this.lng),
    };
    //Creates a google map object
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    let bounds = new google.maps.LatLngBounds();
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      }
    });
    console.log(map);
    this.drawingManager.setMap(map);
    
    //set polygoncomplete event
     google.maps.event.addListener(this.drawingManager, 'polygoncomplete', (polygon) => {
      let len = polygon.getPath().getLength();
      let coordinates = [];
      for (let i = 0; i < len; i++) {
        coordinates.push(polygon.getPath().getAt(i).toUrlValue(5));
      }
      console.log(coordinates);
      alert('ploygon drawing complete. Coordinates: '+coordinates);
     })
    

    //place all zone(ploygons) in map
    this.zoneList.forEach(zone=>{
      this.allpolygons.push(
        new google.maps.Polygon(zone)
      )
      this.allpolygons[this.allpolygons.length - 1].setMap(map);
    })
    this.registerEventsOnPolygon();
    // map.fitBounds(bounds);
  });
}

registerEventsOnPolygon(){
  console.log('here',this.allpolygons);
  this.allpolygons.forEach((polygon)=>{
    google.maps.event.addListener(polygon, 'click', function (event) {
      alert('click');
    });
    google.maps.event.addListener(polygon.getPath(), "insert_at",function(){console.log('edit1',polygon.getPath());});
    google.maps.event.addListener(polygon.getPath(), "set_at",function(){console.log('edit2',polygon.getPath());});
  })
}

  


  
  zoneList =[
  {
    "zoneID": "594dff0ee10452d8567b23c5",
    "strokeColor": "#ea4234",
    "strokeWeight": 2,
    "fillColor": "#ea4234",
    "draggable": false,
    "editable": true,
    "visible": true,
    "paths": [
    {
      "lat": 22.78631,
      "lng": 88.40698
    },
    {
      "lat": 22.53285,
      "lng": 87.73682
    },
    {
      "lat": 22.24844,
      "lng": 88.13782
    },{
      "lat": 21.89208,
      "lng": 88.59375
    },{
      "lat": 22.51256,
      "lng": 89.15405
    },{
      "lat": 22.78631,
      "lng": 88.40698
    } ]
  },
  {
  "zoneID": "594dff0ee10452d8567b23c6",
  "strokeColor": "#ea4234",
  "strokeWeight": 2,
  "fillColor": "#ea4234",
  "draggable": false,
  "editable": false,
  "visible": true,
  "paths": [
  {
    "lat": 24.10618,
    "lng": 87.57968
  },
  {
    "lat": 24.41668,
    "lng":87.8873
  },
  {
    "lat": 24.42168,
    "lng": 88.30478
  },{
     "lat": 24.12624,
    "lng": 88.70303
  } ,{
     "lat": 23.74466,
    "lng": 88.44211
  },{
     "lat": 23.72454,
    "lng": 87.87631
  } ,{
     "lat": 24.10618,
    "lng": 87.57968
  } ]
}]

  hoverOnPolygon(event){
  	// console.log(event.va.type);
  	this.polygonColor = '#0c66a1';  	
  }

  hoverOutPolygon(event){
  	// console.log(event.va.type);
  	this.polygonColor = '#ea4234';  	
  }

  getPath() {
      console.log('here',this.polygon);
       this.polygon.getPath().b.forEach(each =>{
        console.log(each.lat(),each.lng());
      }) 
	}
}
