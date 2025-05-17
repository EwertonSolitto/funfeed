import { Injectable } from '@angular/core';
import type { FeedProps } from '../models/FeedProps';
import defaultFeedList from '../data/defaultFeedList.json'

@Injectable({
  providedIn: 'root',
})
export class FeedDataCacheService {
  private cache: FeedProps[] = [];

  constructor() {
    const storedCache = localStorage.getItem('formDataCache');
    if (storedCache) {
      try {
        this.cache = JSON.parse(storedCache);
      } catch (error) {
        console.error('Erro ao carregar o cache do localStorage:', error);
        this.cache = [...defaultFeedList.data]
        this.saveCache();
      } 
    } else {
      this.cache = [...defaultFeedList.data]
      this.saveCache()
    }
  }

  addFormData(feedData: FeedProps): void {
    this.cache.push(feedData);
    this.saveCache();
  }

  getAllFormData(): FeedProps[] {
    return [...this.cache];
  }

  clearCache(): void {
    this.cache = []
    this.saveCache();
  }

  private saveCache(): void {
    localStorage.setItem('formDataCache', JSON.stringify(this.cache));
  }
}