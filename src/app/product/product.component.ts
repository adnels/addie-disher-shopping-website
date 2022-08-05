import {Component, Input, OnInit} from '@angular/core';
import {IShop} from "../interface/IShop";
import {DataService} from "../data.service";
import {ICartItem} from "../ICartItem";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//todo fix any type below
  @Input() item!: any;
  @Input() inCart: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.dataService.addProductToCart(this.item)
  }

  updateCartCount(count: any) {
    this.dataService.updateCartCount(this.item, count);
  }
}
