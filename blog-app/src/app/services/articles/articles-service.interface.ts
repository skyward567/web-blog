import { Observable } from 'rxjs';
import { Article } from '../../models/article';

export interface ArticlesResponse {
  items: Article[];
  total: number;
}

export interface IArticlesService {
  getArticles(page: number): Observable<ArticlesResponse>;
  addArticle(article: Article): Observable<ArticlesResponse>;
  updateArticle(article: Article): Observable<ArticlesResponse>;
  deleteArticle(id: number): Observable<ArticlesResponse>;
}
