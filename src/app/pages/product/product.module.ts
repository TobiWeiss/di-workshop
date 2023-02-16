import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AnimateModule } from 'primeng/animate';
import { ProductService } from '@app/services/product.service';
import { Logger } from '@app/services/logger/logger';
import { BasicLoggerService } from '@app/services/logger/basic-logger.service';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    RatingModule,
    FormsModule,
    AnimateModule,
  ],
  declarations: [ProductComponent],
  providers: [
    ProductService,
    {
      provide: Logger,
      useClass: BasicLoggerService,
    },
  ],
})
export class ProductModule {}
