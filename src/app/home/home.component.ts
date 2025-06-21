import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private app:AppComponent) {
  this.app.path = window.location.pathname;
  console.log(this.app.path)
}
}
