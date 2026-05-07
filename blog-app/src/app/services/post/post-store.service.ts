import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

// Сервис-хранилище для страницы отдельного поста
// Только хранение — никаких манипуляций с данными
@Injectable({ providedIn: 'root' })
export class PostStoreService {
  public article: Article | null = null;
  public comments: Comment[] = [];

  public saveArticle(article: Article): void {
    this.article = article;
  }

  public saveComments(comments: Comment[]): void {
    this.comments = comments;
  }

  public clear(): void {
    this.article = null;
    this.comments = [];
  }
}
