import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { InputProps } from '../../../models/InputProps';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz-option-input-component',
  imports: [FormsModule],
  templateUrl: './quiz-option-input-component.component.html',
  styleUrl: './quiz-option-input-component.component.css'
})
export class QuizOptionInputComponent {
  @Input() props!: InputProps;
  @Input({ required: true }) ngValue!: string

  @Output() changeValue = new EventEmitter<string>()

  onValueChange(): void {
    this.changeValue.emit(this.ngValue);
  } 
}
