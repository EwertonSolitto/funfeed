import { Component } from '@angular/core';
import { FeedDataCacheService } from '../feed-data-cache.service'
import type { FeedProps } from '../../models/FeedProps';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-list',
  imports: [CommonModule],
  templateUrl: './feed-list.component.html',
  styleUrl: './feed-list.component.css'
})
export class FeedListComponent {
  cachedFormDataList: FeedProps[] = []
  
  constructor(private feedDataCacheService: FeedDataCacheService) {}

  ngOnInit(): void {
    this.loadCachedFormData();
  }

  loadCachedFormData(): void {
    this.cachedFormDataList = this.feedDataCacheService.getAllFormData();
  }
} 
