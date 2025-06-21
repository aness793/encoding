import { Component, OnInit, ViewChild } from '@angular/core';
import { HuffmanService } from '../huffman.service';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { NoticeComponent } from '../notice/notice.component';

@Component({
  selector: 'app-huffman',
  imports: [CommonModule , FormsModule , ReactiveFormsModule , NoticeComponent ],
  templateUrl: './huffman.component.html',
  styleUrl: './huffman.component.css'
})
export class HuffmanComponent implements OnInit {
  @ViewChild(NoticeComponent) notice!: NoticeComponent;
  ngAfterViewInit() {
  // Now notice is available
}
ngOnInit(): void {
}

entropie:number=0
sum:number=0
constructor( private huffmanService:HuffmanService , private app:AppComponent ) {
  this.app.path = window.location.pathname;
  console.log(this.app.path)
}
 processText(text: string) {
    const freqMap = this.huffmanService.buildFrequencyTable(text);
    freqMap.forEach((value, key) => {
    console.log('value:' + value)
      this.sum+= value;
      this.freqs.push(value);
      this.chars.push(key);
    })
    const huffmanTree = this.huffmanService.buildHuffmanTree(freqMap);
    const codeMap = this.huffmanService.generateCodes(huffmanTree);
    const encodedText = this.huffmanService.encode(text, codeMap);
    const decodedText = this.huffmanService.decode(encodedText, huffmanTree);
    const probMap = this.huffmanService.probMap(freqMap, this.sum)
    if(probMap){
          probMap.forEach((char, prob) => (
      this.probs.push(Number(char.toFixed(3))),
        this.codeSum+=Number(char.toFixed(2))

    ));
    this.codeSum =Math.round(this.codeSum)
    console.log('les probs are :' +this.probs)
  }
    const entropy = this.huffmanService.Entropie(probMap)
    this.entropie = entropy
    if(codeMap) {
      codeMap.forEach((value,key)=>{
        this.codes.push(value)
      })
    }
  
    // console.log("Encoded:", encodedText);
    // console.log("Decoded:", decodedText);
  }
  codeSum:number=0
  freqs:number[] = []
  chars:string[] = []
  probs: number[] = []
  codes:string[]=[]
  
  if(freqMap: Map<string, number>) {
    Object.entries(freqMap).map(([char, freq]) => (
      this.freqs.push(freq),
      this.chars.push(char)
    ));
    
  }

  inputString:string=''
  display=false
  text:string=''
  L=0
  reset(){
  this.L=0
  this.freqs =[]
  this.chars= []
  this.probs= []
  this.codes=[]
  this.codeSum=0
  this.sum=0
  this.display=false
}
encode(){
  this.reset()
  if(this.inputString===''){
    alert('please enter a string first')
    this.display=false
  }
    else {

      this.text = this.inputString
  this.processText(this.inputString);
  this.display =true
  this.inputString = '';
  console.log(this.freqs , this.chars )
  console.log("Sum of frequencies: " + this.sum);
  for(let i in this.codes){
    if(this.codes[i] !== undefined && this.probs[i] !== undefined) {
      this.L += this.codes[i].toString().length * this.probs[i];
    }
  }
}

}
visible = false;
noticeMessage:string=''
 copyText(text: string) {
  this.visible =true
    setTimeout(() => {
      this.visible = false;
      }, 3000); 
    navigator.clipboard.writeText(text)
      .then(() => this.noticeMessage = text + " Copied to clipboard ")
      .catch(err => console.error("Error copying:", err));
  }
};

