import { Injectable } from '@angular/core';
import { IShop } from './interface/IShop';
import {Subject} from "rxjs";
import {ICartItem} from "./ICartItem";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productList: Array<IShop> = [

    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "Check Print Shirt",
      price: 110,
      rating: 4
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "Gloria High Logo Sneaker",
      price: 91,
      rating: 3
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "Cate Rigid Bag",
      price: 94.5,
      rating: 2
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      name: "Guess Connect Watch",
      price: 438.9,
      rating: 5
    },
    {
      imgUrl: "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      name: "'70's Retro Glam Kefiah",
      price: 20,
      rating: 3
    }
  ]
  private cart: Array<ICartItem> = [];
  cart$ = new Subject<Array<ICartItem>>();

  constructor() {
  }

  getCart() {
   return [...this.cart];
  }

  addProductToCart(item: IShop) {
      const foundItem = this.cart.find((product) => product.name === item.name);
      if (foundItem) {
        foundItem.count++;
      } else {
     this.cart.push({...item, count: 1});

      }
     this.cart$.next(this.cart);
  }

  removeProductFromCart(item: IShop) {
    const index = this.cart.findIndex((product) => {
        return product.name === item.name
      }
    );

    if (index !== -1) {
      this.cart.splice(index, 1);
    }

    this.cart$.next(this.cart);
  }

  updateCartCount(item: ICartItem, count: number) {
    const foundItem = this.cart.find((product) => product.name === item.name);
    if (foundItem) {
      if (count === 0) {
        return this.removeProductFromCart(item);
      }
      foundItem.count = count;
    }
    this.cart$.next(this.cart);
  }
}
