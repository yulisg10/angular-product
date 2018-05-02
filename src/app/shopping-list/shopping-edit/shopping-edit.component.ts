import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { ListProduct } from '../../shared/listproduct.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() productAdded = new EventEmitter<ListProduct>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const addName = this.nameInputRef.nativeElement.value;
    const addAmount = this.amountInputRef.nativeElement.value;
    const newListProduct = new ListProduct(addName, addAmount);
    this.productAdded.emit(newListProduct);
  }

}
