import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Article } from '../../models/article';
import { IArticlesService, ArticlesResponse } from './articles-service.interface';
import { environment } from '../../../environments/environment';

// Тип ответа от бэкенда
interface ApiArticle {
  id: string;
  title: string;
  content: string;
  categoryId: string | null;
  rating: number;
  imageUrl?: string | null;
  createdAt?: string;
}

interface ApiArticlesResponse {
  items: ApiArticle[];
  total: number;
  page: number;
  limit: number;
}

// Маппер: ApiArticle → наш Article
function mapArticle(a: ApiArticle): Article {
  return {
    id: a.id,
    title: a.title,
    content: a.content,
    date: a.createdAt
      ? new Date(a.createdAt).toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '',
    rating: a.rating ?? 0,
    categoryId: a.categoryId ?? null,
    imageUrl: a.imageUrl ?? null,
  };
}

// Сервис для локальной разработки — работает с бэкендом через HttpClient
@Injectable({ providedIn: 'root' })
export class ArticlesApiService implements IArticlesService {
  private readonly base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getArticles(page: number): Observable<ArticlesResponse> {
    return this.http
      .get<ApiArticlesResponse>(`${this.base}/articles`, {
        params: { page: page.toString(), limit: '7' },
      })
      .pipe(
        map((res) => ({
          items: res.items.map(mapArticle),
          total: res.total,
        })),
      );
  }

  public addArticle(article: Article, imageFile?: File | null): Observable<ArticlesResponse> {
    const formData = this.buildFormData(article, imageFile);
    return this.http
      .post<ApiArticle>(`${this.base}/articles`, formData)
      .pipe(switchMap(() => this.getArticles(1)));
  }

  public updateArticle(article: Article, imageFile?: File | null): Observable<ArticlesResponse> {
    const formData = this.buildFormData(article, imageFile);
    return this.http
      .patch<ApiArticle>(`${this.base}/articles/${article.id}`, formData)
      .pipe(switchMap(() => this.getArticles(1)));
  }

  public deleteArticle(id: string): Observable<ArticlesResponse> {
    return this.http
      .delete(`${this.base}/articles/${id}`)
      .pipe(switchMap(() => this.getArticles(1)));
  }

  private buildFormData(article: Article, imageFile?: File | null): FormData {
    const fd = new FormData();
    fd.append('title', article.title);
    fd.append('content', article.content);
    if (article.categoryId) fd.append('categoryId', article.categoryId);
    if (imageFile) fd.append('image', imageFile);
    return fd;
  }
}
