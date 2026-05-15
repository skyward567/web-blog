import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { IArticlesService, ArticlesResponse } from './articles-service.interface';

const STORAGE_KEY = 'blog_posts';
const PAGE_SIZE = 7;

// Сервис для GitHub Pages — работает с localStorage
@Injectable({ providedIn: 'root' })
export class ArticlesService implements IArticlesService {
  private loadAll(): Article[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  private saveAll(articles: Article[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
  }

  private buildResponse(articles: Article[], page: number): ArticlesResponse {
    const total = articles.length;
    const start = (page - 1) * PAGE_SIZE;
    const items = articles.slice(start, start + PAGE_SIZE);
    return { items, total };
  }

  public getArticles(page: number): Observable<ArticlesResponse> {
    return of(this.buildResponse(this.loadAll(), page));
  }

  // imageFile игнорируется в localStorage-версии
  public addArticle(article: Article, _imageFile?: File | null): Observable<ArticlesResponse> {
    const all = this.loadAll();
    all.unshift({ ...article, id: Date.now().toString() });
    this.saveAll(all);
    return of(this.buildResponse(all, 1));
  }

  public updateArticle(article: Article, _imageFile?: File | null): Observable<ArticlesResponse> {
    const all = this.loadAll().map((a) => (a.id === article.id ? article : a));
    this.saveAll(all);
    return of(this.buildResponse(all, 1));
  }

  public deleteArticle(id: string): Observable<ArticlesResponse> {
    const all = this.loadAll().filter((a) => a.id !== id);
    this.saveAll(all);
    return of(this.buildResponse(all, 1));
  }
}
