import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { MenuComponent } from '../../menu/menu.component';
import { FeedListComponent } from '../../feed-list/feed-list.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, MenuComponent, FeedListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  search = ''

  handleSearch(newValue: string) {
    this.search = newValue
  }

  getSearch() {
    console.log(this.search)
  }
}
