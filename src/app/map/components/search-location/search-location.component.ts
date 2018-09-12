import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
declare var google: any;
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {
	public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public animation;
  public google;
  constructor(
  	private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  	) { }

  @ViewChild("search")
  public searchElementRef: ElementRef;

  ngOnInit() {
  	this.zoom = 5;
  	this.latitude = 22.160311576947638;
  	this.longitude = 78.9860984375;
  	this.searchControl = new FormControl();

  	this.setCurrentPosition();

  	this.mapsAPILoader.load().then(() => {
  		this.animation = google.maps.Animation.DROP;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place /*:google.maps.places.PlaceResult*/ = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

    private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

}
