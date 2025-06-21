import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild,OnInit } from '@angular/core';

@Component({
  selector: 'notice',
  imports: [CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent implements OnInit {
  ngOnInit(): void {
      
  }
  visible = true
@Input() message:string='';
@ViewChild('container') container!: ElementRef;




}