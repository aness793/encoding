import { Component ,OnInit } from '@angular/core';
import { RleService } from '../rle.service';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rle',
  imports: [FormsModule, CommonModule],
  templateUrl: './rle.component.html',
  styleUrl: './rle.component.css'
})
export class RleComponent implements OnInit {

ngOnInit():void {}
constructor( private rle:RleService, private app:AppComponent){
    this.app.path = window.location.pathname;
  }
inputString:string=''
tooLong=false
display:boolean=false
reset(){
  this.display=false
  this.inputString=''
    this.encodedText=''
    this.tooLong = false
}
encodedText=''
encode(){
  if(this.inputString==='') {
    alert('can not encode an empty string')
    return
  }
  this.display=true
  this.encodedText = this.rle.RLE_Encoding(this.inputString)
  if(this.encodedText.length>10){
    this.tooLong=true
  }
  
}
}
