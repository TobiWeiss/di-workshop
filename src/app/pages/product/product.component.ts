import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { Logger } from '../../services/logger/logger';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]>;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortKey: Event;

  sortField: string;

  constructor(
    private readonly productService: ProductService,
    private readonly logger: Logger
  ) {}

  ngOnInit() {
    this.products$ = this.productService
      .getProducts()
      .pipe(tap(() => this.logger.log('Products Loaded')));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' },
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
