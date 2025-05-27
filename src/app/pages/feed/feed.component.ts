import { Component } from '@angular/core';
import { FeedDataCacheService } from '../../feed-data-cache.service';
import type { FeedProps } from '../../../models/FeedProps';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
    cachedFormDataList: FeedProps[] = []
    feed: FeedProps | undefined = undefined
    isStarted = false
    isFinished = false
    questionCounter = 0
    currentValueSelected: number | null = null
    currentQuestion = this.feed?.quizes[this.questionCounter]
    optionList: { result: { value: string; }; points: number}[] | undefined = []
    result = ''
    
    constructor(
      private feedDataCacheService: FeedDataCacheService, 
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
    this.loadCachedFormData();

    this.route.paramMap.subscribe(params => {
      const feedId = Number(params.get('id'));
      if (feedId) {
        this.feed = this.cachedFormDataList[feedId - 1]
        this.currentQuestion = this.feed?.quizes[this.questionCounter]
        this.optionList = this.feed?.results.map(result => {return {result, points: 0}})
      }
    });
  }

  startFeed(): void {
    this.isStarted = true
  }

  resetFeed(): void {
    this.isStarted = false
    this.isFinished = false
    this.questionCounter = 0
    this.currentQuestion = this.feed?.quizes[this.questionCounter]
    this.optionList = this.feed?.results.map(result => {return {result, points: 0}})
  }

  setValue(index: number): void {
    this.currentValueSelected = index
  }

  setPoint(): void {
    if(this.optionList) {
      const resultIndex = this.optionList.findIndex(({result}) => {
        if(this.currentValueSelected !== null) {
          return result.value === this.currentQuestion?.options[this.currentValueSelected].resultSelected
        }
        return false
      }) 

      this.optionList[resultIndex].points++
    }
  }

  getResult(): void {
    if(this.optionList) {
      const maxPoints = this.optionList[0].points
      const filteredList = this.optionList?.filter(({points}) => points >= maxPoints)
      const randomIndex = Math.floor(Math.random() * filteredList.length)
      this.result = filteredList[randomIndex].result.value
    }
  }

  nextQuestion(): void {
    this.setPoint()
    this.questionCounter++
    this.currentQuestion = this.feed?.quizes[this.questionCounter]
    this.currentValueSelected = null

    if(this.feed?.quizes) {
        if(this.questionCounter >= this.feed?.quizes.length) {
          this.getResult()
          this.isFinished = true
      }
    }
  }

  loadCachedFormData(): void {
    this.cachedFormDataList = this.feedDataCacheService.getAllFormData();
  }
}
