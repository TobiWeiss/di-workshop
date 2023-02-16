import {
  ErrorHandler,
  InjectionToken,
  Injector,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { GlobalErrorHandler } from './core/error.handler';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AnimateModule } from 'primeng/animate';
import { Logger } from './services/logger/logger';
import { AdvancedLoggerService } from './services/logger/advanced-logger.service';
import { BasicLoggerService } from './services/logger/basic-logger.service';

export const AppContextToken = new InjectionToken<AppContext>('AppContext');

export enum AppContext {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
  BROWSER = 'BROWSER',
}

const appContext = AppContext.MOBILE;

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    AnimateModule,
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: Logger,
      useFactory: (injector: Injector) => {
        return injector.get(AppContextToken) === AppContext.MOBILE
          ? new AdvancedLoggerService()
          : new BasicLoggerService();
      },
      deps: [Injector],
    },
    {
      provide: AppContextToken,
      useValue: appContext,
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
