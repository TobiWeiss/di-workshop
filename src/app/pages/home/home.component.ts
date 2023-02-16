import { Component, OnInit } from '@angular/core';
import { Product } from '@app/models/product';
import { Logger } from '@app/services/logger/logger';
import { ProductService } from '@app/services/product.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favoriteProducts$: Observable<Product[]>;
  responsiveOptions;

  constructor(
    private readonly productService: ProductService,
    private readonly logger: Logger
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit() {
    this.favoriteProducts$ = this.productService
      .getFavoriteProducts()
      .pipe(tap(() => this.logger.log('Favorite Products loaded')));
  }
}
