import { Injectable } from '@angular/core';


class Node {
    char: string | null;
    freq: number; // This property MUST exist
    left: Node | null;
    right: Node | null;

    constructor(char: string | null, freq: number, left: Node | null = null, right: Node | null = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}
@Injectable({
  providedIn: 'root'
})
export class HuffmanService {

  constructor() {}

  // Method to build frequency table
  buildFrequencyTable(text: string): Map<string, number> {
    const freqMap = new Map<string, number>();
    for (const char of text) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
  
    
    
    return freqMap;
  }
  probMap(freqMap: Map<string, number> , sum:number){
    const probMap = new Map<string,number>();
    for(const [char, freq] of freqMap.entries()) {
    
      probMap.set(char, freq / sum);
    }
    console.log("Probability Map: ", [...probMap.entries()]);
    return probMap
  }
  Entropie(probMap:Map<string,number> ){
    let entropy = 0;
    probMap.forEach((prob,char)=>{
      entropy+=prob*Math.log2(prob)
    })
    console.log("Entropy: ", -entropy.toFixed(2));
    return -entropy
  }

  // Method to build Huffman tree
  buildHuffmanTree(freqMap: Map<string, number>): Node {
    let nodes: Node[] = [...freqMap.entries()].map(([char, freq]) => new Node(char, freq));

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        const left = nodes.shift()!;
        const right = nodes.shift()!;
        const parent = new Node(null, left.freq + right.freq, left, right);
        nodes.push(parent);
    }
    // console.log(nodes[0])
    return nodes[0];
  }

  // Method to generate Huffman codes
  generateCodes(node: Node | null, prefix = "", codeMap: Map<string, string> = new Map()): Map<string, string> {
    if (!node) return codeMap;
    if (node.char) codeMap.set(node.char, prefix);
    this.generateCodes(node.left, prefix + "1", codeMap);
    this.generateCodes(node.right, prefix + "0", codeMap);
    // console.log(codeMap)
    // console.log(codeMap.entries())
    return codeMap;
  }

  // Method to encode text
  encode(text: string, codeMap: Map<string, string>): string {
    // console.log(text.split("").map(char => codeMap.get(char)!).join(""))
    return text.split("").map(char => codeMap.get(char)!).join("");
  }

  // Method to decode Huffman-encoded text
  decode(encodedText: string, tree: Node): string {
    let result = "";
    let currentNode: Node | null = tree;
    for (const bit of encodedText) {
       if (!currentNode) break;
        currentNode = bit === "0" ? currentNode.left : currentNode.right;
        if (currentNode?.char) {
            result += currentNode.char;
            currentNode = tree;
        }
    }
    // console.log(result)
    return result;
  }
}