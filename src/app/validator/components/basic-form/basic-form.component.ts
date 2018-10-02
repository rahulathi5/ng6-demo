import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
	formData:any;
   hide = true;
  constructor() { }

  ngOnInit() {
  	this.formData={
  		name:'',
  		email:'',
      contactNo:'',
      url:'',
      year:'',
      zip:''
  	}
  }

  submitData(event){
  	console.log(event ,this.formData);
  }

}
