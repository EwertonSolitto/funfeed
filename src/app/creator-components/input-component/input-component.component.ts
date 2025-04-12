import { Component, Input } from '@angular/core';
import type { InputProps } from '../../../models/InputProps';

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css'
})
export class InputComponent {
  @Input() props!: InputProps;

  placeholderChecker() {
    return this.props.placeholder ? this.props.placeholder : "Which Superpower would you like to have?"
  }
}
