import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';
import { ProductService } from './product-service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedProduct: Product;

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getProducts(): void {
    //Recibe un observable
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
