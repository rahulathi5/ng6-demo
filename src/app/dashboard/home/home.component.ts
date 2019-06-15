import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface ProductCategory {
  name: string;
  subCategory: Array<string>
}

export interface Product {
  name: string;
  category: string,
  price: number,
  stock: number
}

const ELEMENT_DATA: ProductCategory[] = [
  { name: 'Hydrogen', subCategory:['lorem','ipsum']},
  { name: 'Helium', subCategory:['lorem','ipsum']},
  { name: 'Lithium', subCategory:['lorem','ipsum']},
  { name: 'Beryllium', subCategory:['lorem','ipsum']},
  { name: 'Boron', subCategory:['lorem','ipsum']},
];

const PRODUCT_DATA: Product[] = [
  { name: 'American Tourister', category:'Accessories', price:5000.00, stock:10},
  { name: 'Remi Note 4', category:'Smart phone', price:15000.00, stock:8},
];
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  hide = true;
   displayedColumns: string[] = ['name', 'subCategory', 'action' ];
   productColumns: string[] = ['name', 'category', 'price','stock', 'action' ];
    dataSource1 = new MatTableDataSource(PRODUCT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
   @ViewChild(MatSort) sort: MatSort;
   panelOpenState = false;
   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
    autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  private _tickInterval = 1;
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource1.sort = this.sort;
  }

}
