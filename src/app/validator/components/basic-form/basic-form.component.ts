import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
	formData:any;
  constructor() { }

  ngOnInit() {
  	this.formData={
  		name:'',
  		email:''
  	}
  }

  submitData(event){
  	console.log(event ,this.formData);
  }

}
