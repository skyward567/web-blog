import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-article-card-blog',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './article-card-blog.html',
  styleUrl: './article-card-blog.scss',
})
export class ArticleCardBlog {
  @Input() public article!: Article;
  @Output() public delete = new EventEmitter<string>(); // string вместо number
  @Output() public edit = new EventEmitter<Article>();

  protected onDelete(): void {
    this.delete.emit(this.article.id);
  }

  protected onEdit(): void {
    this.edit.emit(this.article);
  }
}
