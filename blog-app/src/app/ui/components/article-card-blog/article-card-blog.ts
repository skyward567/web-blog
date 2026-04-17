import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-card-blog',
  imports: [],
  templateUrl: './article-card-blog.html',
  styleUrl: './article-card-blog.scss',
})
export class ArticleCardBlog {
  @Input() article!: Article;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.article.id);
  }
}
