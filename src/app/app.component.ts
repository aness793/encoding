import { CommonModule } from '@angular/common';
import { Component , OnInit } from '@angular/core';
import {  RouterLink, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'encoding';
  path?:string;
  constructor() {
         this.path = window.location.pathname;
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }
  ngOnChange():void {
     this.path = window.location.pathname;



  }
}
