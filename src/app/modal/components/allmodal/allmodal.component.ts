import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-allmodal',
  templateUrl: './allmodal.component.html',
  styleUrls: ['./allmodal.component.css']
})
export class AllmodalComponent implements OnInit {
	viewInfoModal: Object;
  userList: Array<Object>;
  
   @ViewChild('deleteConfirmationModal') deleteConfirmationModal;
  constructor() { }

  ngOnInit() {
  	this.viewInfoModal ={
  		heading:'What is Lorem Ipsum?',
  		body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  	}

    this.userList = [{
      name:'John',
      id:1
    },{
      name:'Tom',
      id:2
    }]


  }

    deleteUser(user){
      this.userList.splice(this.userList.indexOf(user),1);
      this.deleteConfirmationModal.close();
    }
}
