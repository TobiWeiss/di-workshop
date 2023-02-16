import { Injectable } from '@angular/core';
import { Logger, storeLog } from './logger';

@Injectable()
export class BasicLoggerService implements Logger {
  readonly prefix = 'BASIC LOGGER:';

  constructor() {}

  log(message: string) {
    const messageWithPrefix = `${this.prefix} ${message}`;
    console.info(messageWithPrefix);
    storeLog(messageWithPrefix);
  }
}
