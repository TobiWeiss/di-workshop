import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: Array<MenuItem> = [];

  constructor() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'Produkte',
        icon: 'pi pi-cart-plus',
        routerLink: '/products',
      },
    ];
  }

  ngOnInit() {}
}
