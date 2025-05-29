import { Component, Input } from '@angular/core';
import { FeedDataCacheService } from '../feed-data-cache.service'
import type { FeedProps } from '../../models/FeedProps';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from "./feed-card/feed-card.component";

@Component({
  selector: 'app-feed-list',
  imports: [CommonModule, FeedCardComponent],
  templateUrl: './feed-list.component.html',
  styleUrl: './feed-list.component.css'
})
export class FeedListComponent {
  @Input({required: true}) searchValue!: string
  cachedFormDataList: FeedProps[] = []
  filteredFormDataList: FeedProps[] = []
  
  constructor(private feedDataCacheService: FeedDataCacheService) {}

  ngOnInit(): void {
    this.loadCachedFormData();
  }

  ngOnChanges(): void {
    this.filteredFormDataList = this.cachedFormDataList.filter(({title}) => { return title.value.toLowerCase().includes(this.searchValue.toLowerCase()) })
  }

  loadCachedFormData(): void {
    this.cachedFormDataList = this.feedDataCacheService.getAllFormData()
    this.filteredFormDataList = this.feedDataCacheService.getAllFormData()
  }
} 
