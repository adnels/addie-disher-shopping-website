import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {IShop} from "./interface/IShop";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  cartList: Array<IShop>
  cartListSub: Subscription;

  constructor(private dataService: DataService) {
    this.cartList = dataService.getCart();
    this.cartListSub = this.dataService.cart$.subscribe((newCart) => {
      this.cartList = newCart;
    })
  }

  ngOnDestroy() {
    this.cartListSub.unsubscribe();
  }
}
