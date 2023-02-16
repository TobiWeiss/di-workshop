import { Injectable } from '@angular/core';

@Injectable()
export abstract class Logger {
  prefix: string | undefined;
  abstract log: (message: string) => void;
}

export const storeLog = (message: string) => {
  // imagine we're calling some API here
};
