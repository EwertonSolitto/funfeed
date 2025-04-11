import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feed-creator',
  imports: [HeaderComponent, FooterComponent, MatIconModule],
  templateUrl: './feed-creator.component.html',
  styleUrl: './feed-creator.component.css'
})
export class FeedCreatorComponent {

}
