import { Component, OnInit } from '@angular/core';

import { ListProduct } from '../shared/listproduct.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    listproducts: ListProduct[] = [
    new ListProduct('Producto_2', 10),
    new ListProduct('Producto_3', 15),
  ];
  constructor() { }

  ngOnInit() {
  }

  onProductAdded(listproduct: ListProduct) {
    this.listproducts.push(listproduct);
  }
}
