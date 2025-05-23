import { Component, Input } from '@angular/core';
import type { FeedCardProps } from '../../../models/FeedCardProps';

@Component({
  selector: 'app-feed-card',
  imports: [],
  templateUrl: './feed-card.component.html',
  styleUrl: './feed-card.component.css'
})
export class FeedCardComponent {
  @Input({ required: true }) props!: FeedCardProps;

  ngOnInit() {
    if(this.props.description.length > 150) {
      this.props.description = `${this.props.description.slice(0, 150)}........`
    }
  }
}
