import { Injectable } from '@angular/core';
import { Article } from '../../models/article';

// Сервис-хранилище — только хранение, никаких манипуляций с данными
// providedIn: 'root' — один экземпляр на всё приложение (singleton)
// Один и тот же стор используется и на главной и на странице блога
@Injectable({ providedIn: 'root' })
export class ArticlesStoreService {
  // Список статей текущей страницы
  public articles: Article[] = [];

  // Общее количество статей (без учёта пагинации)
  public total: number = 0;

  // Активная страница пагинации
  public activePage: number = 1;

  // Сохранить список статей
  public saveArticles(articles: Article[]): void {
    this.articles = articles;
  }

  // Сохранить активную страницу
  public savePage(page: number): void {
    this.activePage = page;
  }
}
