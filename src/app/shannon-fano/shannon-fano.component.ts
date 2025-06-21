import { Component, OnInit,ViewChild} from '@angular/core';
import { ShannonFanoService } from '../shannon-fano.service';
import { AppComponent } from '../app.component';
import {FormsModule} from '@angular/forms'
import {NoticeComponent} from '../notice/notice.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shannon-fano',
  imports: [FormsModule, CommonModule, NoticeComponent ],
  templateUrl: './shannon-fano.component.html',
  styleUrl: './shannon-fano.component.css'
  
})
export class ShannonFanoComponent implements OnInit {
  @ViewChild(NoticeComponent) notice!: NoticeComponent;
  encodedData: Record<string, string> = {};
  inputText = '';
  constructor(private shannonFano: ShannonFanoService  , private app:AppComponent) {
    this.app.path = window.location.pathname;

  }
ngOnInit(): void {
}
display:boolean=false
reset(){
  this.display = false
  this.encodedData = {};
  this.freqs= {}
  this.shannonFano.codes = {};
  this.characters = []
  this.frequencies = []
  this.codes= []
  this.probabilities=[]
  this.length =0
  this.totalProbability=0
  this.entropy=0
  this.text=''

}
entropy:number=0
length:number=0
probabilities:number[]=[]
characters:string[]=[];
frequencies:number[]=[]
codes:string[]=[]
freqs:Record <string,number>={}
text:string=''
  generateCodes() {
    this.reset()
    if (this.inputText) {
      this.display=true
      this.encodedData = this.shannonFano.encode(this.inputText);
      console.log(this.encodedData)
      console.log(this.encodedData['h'])
      if(this.encodedData){
        Object.entries(this.encodedData).map(([key, value]) =>{
        })
        console.log(this.characters)
        console.log(this.codes)
          this.text= this.inputText;
      this.freqs = this.shannonFano.calculateFrequency(this.inputText)
      for(let i of   this.text){
        if(!this.characters.includes(i)){
          this.characters.push(i)
          this.frequencies.push(this.freqs[i])
          this.codes.push(this.encodedData[i]);
          this.probabilities.push(Number((this.freqs[i]/this.inputText.length).toFixed(5)))
        }
      
      }
       for(let i of this.probabilities){
        this.entropy+=i*Math.log2(i)
         this.totalProbability +=i
        }
        this.entropy= -this.entropy
        this.totalProbability = Math.round(this.totalProbability)
      for(let i in this.codes){
        this.length += this.codes[i].length * this.probabilities[i]
      }
        
        this.inputText =''
    }
  }
  else {
    alert('cannot encode an empty sequence, please enter a value')
  }
}
totalProbability:number=0

  noticeMessage:string=''
  visible:boolean = false;
 copyText(text: string) {
  this.visible =true
    setTimeout(() => {
      this.visible = false;
      }, 3000); 
    navigator.clipboard.writeText(text)
      .then(() => this.noticeMessage = text + " Copied to clipboard ")
      .catch(err => console.error("Error copying:", err));
  }
}