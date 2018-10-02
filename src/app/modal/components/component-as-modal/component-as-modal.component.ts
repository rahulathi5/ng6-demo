import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component-as-modal',
  templateUrl: './component-as-modal.component.html',
  styleUrls: ['./component-as-modal.component.css']
})
export class ComponentAsModalComponent implements OnInit {
  _data;
  constructor() { }

  @Input('data')
  set data(data: Object) {
    this._data =data;
  }

  ngOnInit() {
    /* tslint:disable */
    console.info('ComponentAsModalComponent: created');
    /* tslint:enable */
  }

  ngOnDestroy() {
    /* tslint:disable */
    console.info('ComponentAsModalComponent: destroyed');
    /* tslint:enable */
  }

}
