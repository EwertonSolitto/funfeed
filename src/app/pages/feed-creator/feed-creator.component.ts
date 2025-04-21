import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { QuizOptionInputComponent } from '../../creator-components/quiz-option-input-component/quiz-option-input-component.component';
import { InputComponent } from '../../creator-components/input-component/input-component.component';
import { SelectComponent } from '../../creator-components/select-component/select-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { resultsModel } from './models/results';

@Component({
  selector: 'app-feed-creator',
  imports: [
    HeaderComponent, 
    FooterComponent, 
    MatIconModule, 
    QuizOptionInputComponent, 
    InputComponent, 
    SelectComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './feed-creator.component.html',
  styleUrl: './feed-creator.component.css'
})
export class FeedCreatorComponent {
  formData = {
    title: { value: '' },
    description: { value: '' },
    results: [
      { value: '' },
      { value: '' },
    ],
    quizes: [
      { title: { value: ''},
        options: [
          { value: '', resultSelected: ''},
          { value: '', resultSelected: ''},
          { value: '', resultSelected: ''}
        ]
      }
    ]
  }

  resultModels = resultsModel

  questionOne = {title: 'Question 1', id: 'quiz-title-1'}
  quizOptionOne = {title: 'Option 1', id: 'quiz-1-option-1', placeholder: 'Fly'}
  quizOptionTwo = {title: 'Option 2', id: 'quiz-1-option-2', placeholder: 'Super Strength'}

  options = ['Spider Man', 'Hulk']
  selectOptionsOne = {id: "quiz-1-option-1-select", options: this.options}
  selectOptionsTwo = {id: "quiz-1-option-2-select", options: this.options}
  selectOptionsThree = {id: "quiz-1-option-3-select", options: this.options}

  test = {title: 'Option 3', id: 'quiz-1-option-3', placeholder: 'Invisibility'}
  addNewComponent() {
    console.log(this.formData)
  }

  onChangeInput(
    newValue: string,
    titleName: 'results' | 'quizes', 
    index: number, 
    quizTitle?: 'title' | 'options',
    quizIndex?: number,
    quizType?: 'value' | 'resultSelected'
    ) {
    if (titleName === 'results') {
      this.formData[titleName][index].value = newValue
    } else if(titleName === 'quizes') {
      if(quizTitle === 'title') {
        this.formData[titleName][index].title.value = newValue
      } else if(quizTitle === 'options' && typeof quizIndex === 'number') {
        if(quizType === 'value') {
          this.formData[titleName][index].options[quizIndex].value = newValue
        } else if(quizType === 'resultSelected') {
          this.formData[titleName][index].options[quizIndex].resultSelected = newValue
        }
      }
    }
  }

  AddComponent(local: 'results' | 'quizes' | 'options', quizIndex?: number) {
    const resultsModel = { value: '' }
    const optionsModel = { value: '' , resultSelected: ''}
    const quizesModel = { 
      title: resultsModel,
      options: [
        optionsModel,
        optionsModel,
      ]
    }

    switch(local) {
      case 'results':
      if(this.formData.results.length <= 10) {
        this.formData.results.push(resultsModel)
      }  
      break
      case 'quizes':
        if(this.formData.quizes.length <= 10) {
          this.formData.quizes.push(quizesModel)
        }  
        break
      case 'options':
        if(typeof quizIndex === 'number') {
          if(this.formData.quizes[quizIndex].options.length <= 8) {
            this.formData.quizes[quizIndex].options.push(optionsModel)
          }  
        }
        break
      default:
        throw Error('Cannot add component')
    }
  }

  RemoveComponent(local: 'results' | 'quizes' | 'options', quizIndex?: number) {
    switch(local) {
      case 'results':
        this.formData.results.pop()
      break
      case 'quizes':
          this.formData.quizes.pop()
        break
      case 'options':
        if(typeof quizIndex === 'number') {
          this.formData.quizes[quizIndex].options.pop() 
        }
        break
      default:
        throw Error('Cannot add component')
    }
  }
}
