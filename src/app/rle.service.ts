import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RleService {
  constructor() { }
   RLE_Encoding(input: string): string {
    if (!input) return '';

    let encoded = '';
    let count = 1;

    for (let i = 1; i <= input.length; i++) {
      if (input[i] === input[i - 1]) {
        count++;
      } else {
        encoded += count.toString() + input[i - 1]  ;
        count = 1;
      }
    }
    console.log(encoded)
    return encoded;
  }

  decode(encoded: string): string {
    let decoded = '';
    let i = 0;

    while (i < encoded.length) {
      let char = encoded[i];
      let count = parseInt(encoded[i + 1], 10);
      decoded += char.repeat(count);
      i += 2;
    }

    return decoded;
  }
}
