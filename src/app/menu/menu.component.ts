import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, RouterOutlet, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input({ required: true }) ngValue!: string

  @Output() changeValue = new EventEmitter<string>()

   onValueChange(): void {
    this.changeValue.emit(this.ngValue);
  } 
}
