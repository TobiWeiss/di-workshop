import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { HomeRoutingModule } from './home.routing';
import { ProductService } from '../../services/product.service';
import { AnimateModule } from 'primeng/animate';
import { SkeletonModule } from 'primeng/skeleton';
import { Logger } from '@app/services/logger/logger';
import { BasicLoggerService } from '@app/services/logger/basic-logger.service';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HomeRoutingModule,
    AnimateModule,
    SkeletonModule,
  ],
  declarations: [HomeComponent],
  providers: [
    ProductService,
    { provide: Logger, useClass: BasicLoggerService },
  ],
})
export class HomeFlatModule {}
