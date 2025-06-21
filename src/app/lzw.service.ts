import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LZWService {
dictionary = new Map<string,number>()
  constructor() { }
compress(input: string): number[] {
  const dictionary = new Map<string, number>();
  let dictSize = 1; // Start dictionary index at 0

  // Initialize dictionary with single characters
  for (const char of input) {
    if (!dictionary.has(char)) {
      dictionary.set(char, dictSize++);
    }
  }

  const result: number[] = [];
  let currentString = '';

  for (const char of input) {
    const combinedString = currentString + char;

    if (dictionary.has(combinedString)) {
      currentString = combinedString;
    } else {
      result.push(dictionary.get(currentString) ?? currentString.charCodeAt(0)); // Output longest found sequence
      dictionary.set(combinedString, dictSize++); // Store new sequence
      currentString = char;
    }
  }

  if (currentString) {
    result.push(dictionary.get(currentString) ?? currentString.charCodeAt(0));
  }

  // console.log('Dictionary:', dictionary);
  // console.log('Encoded Sequence:', result);
  this.dictionary = dictionary
  return result;
}


}
