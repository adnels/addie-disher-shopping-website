import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {IShop} from "../interface/IShop";

@Component({
  selector: 'app-shopping-tool',
  templateUrl: './shopping-tool.component.html',
  styleUrls: ['./shopping-tool.component.css']
})
export class ShoppingToolComponent implements OnInit {

  searchText: string = "";
  selectedSort: string = "price"
  productList: Array<IShop>

  constructor(private dataService: DataService) {
    this.productList = dataService.productList;
    this.sort(this.selectedSort);
  }

  ngOnInit(): void {
  }

  filter(searchText: string) {
    this.searchText = searchText;
    this.productList = this.dataService.productList.filter(item => {
      return item.name
        .toUpperCase().includes(this.searchText.toUpperCase())
      }
    );
  }

  sort(selectedSort: string) {
    this.selectedSort = selectedSort;
    this.productList = this.productList.sort(
      (a, b) => {

        switch (this.selectedSort) {
          case "price":
           if (a.price > b.price) return 1;
           if (a.price < b.price) return -1;
          return 0;

          case "rating":
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
          return 0;

          case "name":
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;

          default: return 0
      }
      }
      )
  }
  }
