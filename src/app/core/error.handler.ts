import { ErrorHandler, Injectable } from '@angular/core';
import { Logger } from '../services/logger/logger';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private readonly logger: Logger) {}

  handleError(error) {
    this.logger.log(error.message);
  }
}
