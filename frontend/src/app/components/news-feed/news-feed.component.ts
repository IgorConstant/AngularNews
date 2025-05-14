import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedService } from  '../../services/news-feed.service';
import {News} from '../../models/news.model';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  news: News[] = [];
  loading = true;
  error: string | null = null;

  constructor(private newsService: NewsFeedService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.news = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar as notícias.';
        this.loading = false;
      },
    });
  }

  limitText(text: string, limit: number = 20): string {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  }
}
