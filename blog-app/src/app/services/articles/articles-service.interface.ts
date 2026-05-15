import { Observable } from 'rxjs';
import { Article } from '../../models/article';

export interface ArticlesResponse {
  items: Article[];
  total: number;
}

export interface IArticlesService {
  getArticles(page: number): Observable<ArticlesResponse>;
  addArticle(article: Article, imageFile?: File | null): Observable<ArticlesResponse>;
  updateArticle(article: Article, imageFile?: File | null): Observable<ArticlesResponse>;
  deleteArticle(id: string): Observable<ArticlesResponse>;
}
