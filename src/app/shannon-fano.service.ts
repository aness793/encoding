import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShannonFanoService {
  totalFreq:number=0
  codes: Record<string, string> = {}; // Stores computed codes

  encode(text: string): Record<string, string> {
    const freqMap = this.calculateFrequency(text);
    const sortedSymbols = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

    this.generateCodes(sortedSymbols, "");

    return this.codes; // Returns symbol-to-code mapping
  }

  calculateFrequency(text: string): Record<string, number> {
    const freq: Record<string, number> = {};
    for (const char of text) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  }

  private generateCodes(symbols: [string, number][], prefix: string) {
    if (symbols.length === 1) {
      this.codes[symbols[0][0]] = prefix || "0"; // Assign code
      return;
    }

    const midIndex = this.findSplitIndex(symbols);
    this.generateCodes(symbols.slice(0, midIndex), prefix + "0");
    this.generateCodes(symbols.slice(midIndex), prefix + "1");
  }

  private findSplitIndex(symbols: [string, number][]): number {
    const totalSum = symbols.reduce((sum, [, freq]) => sum + freq, 0);
    let runningSum = 0;
    for (let i = 0; i < symbols.length; i++) {
      runningSum += symbols[i][1];
      if (runningSum >= totalSum / 2) return i + 1;
    }
    return symbols.length;
  }
}
