import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewsFeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recent news about games';
}
