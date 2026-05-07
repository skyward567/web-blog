import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-article-card-blog',
  imports: [RouterLink, MatIconModule],
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
