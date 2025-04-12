import { Component, Input } from '@angular/core';
import type { InputProps } from '../../../models/InputProps';

@Component({
  selector: 'app-quiz-option-input-component',
  imports: [],
  templateUrl: './quiz-option-input-component.component.html',
  styleUrl: './quiz-option-input-component.component.css'
})
export class QuizOptionInputComponent {
  @Input() props!: InputProps;
}
