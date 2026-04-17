import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-card-home',
  imports: [],
  templateUrl: './article-card-home.html',
  styleUrl: './article-card-home.scss',
})
export class ArticleCardHome {
  @Input() article!: Article;
}
