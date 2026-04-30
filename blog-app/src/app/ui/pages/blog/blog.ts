import { Component, Inject, OnInit } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleCardBlog } from '../../components/article-card-blog/article-card-blog';
import { ArticleForm } from '../../components/article-form/article-form';
import { ARTICLES_SERVICE_TOKEN } from '../../../services/articles/articles-service.token';
import { IArticlesService } from '../../../services/articles/articles-service.interface';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';

@Component({
  selector: 'app-blog',
  imports: [ArticleCardBlog, ArticleForm],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  protected showForm = false;
  protected editArticle: Article | null = null;

  constructor(
    // Внедряем сервис через токен
    @Inject(ARTICLES_SERVICE_TOKEN) private articlesService: IArticlesService,
    // Внедряем хранилище напрямую
    protected store: ArticlesStoreService,
  ) {}

  ngOnInit(): void {
    // Проверяем хранилище — если данные уже есть, не делаем запрос
    if (this.store.articles.length > 0) return;
    this.loadPage(this.store.activePage);
  }

  // Загрузить статьи для страницы
  private loadPage(page: number): void {
    this.articlesService.getArticles(page).subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.savePage(page);
      this.store.total = response.total;
    });
  }

  // Количество страниц
  protected get totalPages(): number {
    return Math.ceil(this.store.total / 7);
  }

  // Массив номеров страниц для @for в шаблоне
  protected get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected get postCount(): number {
    return this.store.total;
  }

  // Переключение страницы
  protected onPageChange(page: number): void {
    this.store.savePage(page);
    this.loadPage(page);
  }

  protected onShowCreateForm(): void {
    this.editArticle = null;
    this.showForm = true;
  }

  protected onShowEditForm(article: Article): void {
    this.editArticle = article;
    this.showForm = true;
  }

  protected onCancelForm(): void {
    this.showForm = false;
    this.editArticle = null;
  }

  protected onSave(article: Article): void {
    const request$ = this.editArticle
      ? this.articlesService.updateArticle(article)
      : this.articlesService.addArticle(article);

    request$.subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.savePage(1);
      this.store.total = response.total;
    });

    this.showForm = false;
    this.editArticle = null;
  }

  protected onDelete(id: number): void {
    this.articlesService.deleteArticle(id).subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.total = response.total;
    });
  }

  protected onShowStats(): void {
    alert(`Статей всего: ${this.store.total}`);
  }
}
