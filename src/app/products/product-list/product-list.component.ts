import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();

  //Recibe del Modelo
  products: Product[] = [
  new Product('P1', 'Producto_1', 5, 120, 1, 'Bueno', 'http://www.upsocl.com/wp-content/uploads/2015/04/comida-mexicana.jpg')
];
  constructor() { }

  ngOnInit() {
  }

  onProductSelected(product: Product){
    this.productWasSelected.emit(product);
  }
}
