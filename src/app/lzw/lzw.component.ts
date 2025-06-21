import { Component,OnInit } from '@angular/core';
import { LZWService } from '../lzw.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-lzw',
  imports: [FormsModule, CommonModule],
  templateUrl: './lzw.component.html',
  styleUrl: './lzw.component.css'
})
export class LzwComponent implements OnInit{
  constructor(private lzw:LZWService , private app:AppComponent){
    this.app.path = window.location.pathname;
  }
  sequence:string=''
ngOnInit():void {}
reset(){
  this.sequence =''
  this.display =false
  this.encodedText=''
}
encodedText:string=''
dictionary = new Map<string,number>()
chars:string[]=[]
codes:number[]=[]
encode(){
 if(this.sequence.length>0){
   this.encodedText=[...this.lzw.compress(this.sequence)].join(' ')
   this.display = true
  this.dictionary=this.lzw.dictionary
 if(this.dictionary){
   this.dictionary.forEach((value,key)=>{
    this.chars.push(key)
    this.codes.push(value)
  })
 }
 console.log(this.chars)
 console.log(this.codes)
  }

else {
  alert('can not encode an empty string')
}
}
display:boolean=false;
}
