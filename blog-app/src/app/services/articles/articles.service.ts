import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { IArticlesService, ArticlesResponse } from './articles-service.interface';

const STORAGE_KEY = 'blog_posts';
const PAGE_SIZE = 7; // максимум статей на странице

@Injectable({ providedIn: 'root' })
export class ArticlesService implements IArticlesService {
  // ---------------------------------------------------
  // Работа с localStorage
  // ---------------------------------------------------

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

  // Формирует ответ с учётом пагинации
  private buildResponse(articles: Article[], page: number): ArticlesResponse {
    const total = articles.length;
    const start = (page - 1) * PAGE_SIZE;
    const items = articles.slice(start, start + PAGE_SIZE);
    return { items, total };
  }

  // ---------------------------------------------------
  // Методы сервиса — возвращают Observable
  // of() оборачивает обычное значение в Observable
  // В реальном приложении здесь был бы HTTP запрос
  // ---------------------------------------------------

  // Получить статьи для страницы page
  public getArticles(page: number): Observable<ArticlesResponse> {
    const all = this.loadAll();
    return of(this.buildResponse(all, page));
  }

  // Добавить статью
  public addArticle(article: Article): Observable<ArticlesResponse> {
    const all = this.loadAll();
    all.unshift(article); // вставляем в начало
    this.saveAll(all);
    return of(this.buildResponse(all, 1)); // возвращаем первую страницу
  }

  // Обновить статью
  public updateArticle(article: Article): Observable<ArticlesResponse> {
    const all = this.loadAll();
    const updated = all.map((a) => (a.id === article.id ? article : a));
    this.saveAll(updated);
    return of(this.buildResponse(updated, 1));
  }

  // Удалить статью
  public deleteArticle(id: number): Observable<ArticlesResponse> {
    const all = this.loadAll();
    const updated = all.filter((a) => a.id !== id);
    this.saveAll(updated);
    return of(this.buildResponse(updated, 1));
  }
}
