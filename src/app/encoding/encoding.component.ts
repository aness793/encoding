import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'encoding',
  imports: [CommonModule, FormsModule],
  templateUrl: './encoding.component.html',
  styleUrl: './encoding.component.css'
})
export class EncodingComponent {
@Input() seq: string = ''; 
@Input() message:string='';
 @Input() action!: () => void; // Function input

  handleClick() {
    if (this.action) {
      this.action(); // Call the function passed from the parent
    }
  }
}
