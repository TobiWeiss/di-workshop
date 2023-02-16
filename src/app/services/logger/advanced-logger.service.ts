import { Injectable } from '@angular/core';
import { Logger, storeLog } from './logger';

@Injectable()
export class AdvancedLoggerService implements Logger {
  readonly prefix = 'ADVANCED LOGGER: ';

  constructor() {}

  log(message: string) {
    const messageWithPrefix = `${this.prefix} ${message}`;
    console.info(messageWithPrefix);
    storeLog(messageWithPrefix);
  }
}
