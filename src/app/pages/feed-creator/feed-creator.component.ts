import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { QuizOptionInputComponent } from '../../creator-components/quiz-option-input-component/quiz-option-input-component.component';
import { InputComponent } from '../../creator-components/input-component/input-component.component';
import { SelectComponent } from '../../creator-components/select-component/select-component.component';

@Component({
  selector: 'app-feed-creator',
  imports: [
    HeaderComponent, 
    FooterComponent, 
    MatIconModule, 
    QuizOptionInputComponent, 
    InputComponent, 
    SelectComponent
  ],
  templateUrl: './feed-creator.component.html',
  styleUrl: './feed-creator.component.css'
})
export class FeedCreatorComponent {
  resultOptionOne = {title: 'Option 1', id: 'result-option-1', placeholder: 'Spider Man'}
  resultOptionTwo = {title: 'Option 2', id: 'result-option-2', placeholder: 'Hulk'}
  questionOne = {title: 'Question 1', id: 'quiz-title-1'}
  quizOptionOne = {title: 'Option 1', id: 'quiz-1-option-1', placeholder: 'Fly'}
  quizOptionTwo = {title: 'Option 2', id: 'quiz-1-option-2', placeholder: 'Super Strength'}

  options = ['Spider Man', 'Hulk']
  selectOptionsOne = {id: "quiz-1-option-1-select", options: this.options}
  selectOptionsTwo = {id: "quiz-1-option-2-select", options: this.options}
  selectOptionsThree = {id: "quiz-1-option-3-select", options: this.options}

  test = {title: 'Option 3', id: 'quiz-1-option-3', placeholder: 'Invisibility'}
  addNewComponent() {
    console.log('foi')
  }
}
