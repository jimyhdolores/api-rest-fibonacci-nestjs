import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private _limit = 8;
  private _arrayFib = [0, 1];

  constructor() {
    this._generateFibonacci(2);
  }

  getFibonacci(index: number): number {
    const value = this._arrayFib[index];
    if (value) {
      return value;
    }
    const newLimit = Number(index) + 1 - this._limit;
    this._limit = this._limit + newLimit;

    this._generateFibonacci(this._arrayFib.length, true);

    return this._arrayFib[index];
  }

  private _generateFibonacci(start: number, addNewValue = false) {
    for (let i = start; i < this._limit; i++) {
      const value = this._arrayFib[i - 1] + this._arrayFib[i - 2];
      if (addNewValue) {
        this._arrayFib.push(value);
      } else {
        this._arrayFib[i] = value;
      }
    }
  }
}
