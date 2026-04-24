import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-card-blog',
  imports: [],
  templateUrl: './article-card-blog.html',
  styleUrl: './article-card-blog.scss',
})
export class ArticleCardBlog {
  @Input() public article!: Article;
  @Output() public delete = new EventEmitter<number>();
  @Output() public edit = new EventEmitter<Article>();

  protected onDelete(): void {
    this.delete.emit(this.article.id);
  }

  protected onEdit(): void {
    this.edit.emit(this.article);
  }
}
