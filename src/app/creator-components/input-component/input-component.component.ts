import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { InputProps } from '../../../models/InputProps';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  imports: [FormsModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponent {
  @Input() props!: InputProps;
  @Input({ required: true }) ngValue!: string

  @Output() changeValue = new EventEmitter<string>()

  placeholderChecker() {
    return this.props.placeholder ? this.props.placeholder : "Which Superpower would you like to have?"
  }

  onValueChange(): void {
    this.changeValue.emit(this.ngValue);
  } 
}
