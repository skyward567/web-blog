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
    @Inject(ARTICLES_SERVICE_TOKEN) private articlesService: IArticlesService,
    protected store: ArticlesStoreService,
  ) {}

  ngOnInit(): void {
    if (this.store.articles.length > 0) return;
    this.loadPage(this.store.activePage);
  }

  private loadPage(page: number): void {
    this.articlesService.getArticles(page).subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.savePage(page);
      this.store.total = response.total;
    });
  }

  protected get totalPages(): number {
    return Math.ceil(this.store.total / 7);
  }

  protected get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  protected get postCount(): number {
    return this.store.total;
  }

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

  // Теперь принимает { article, imageFile }
  protected onSave(event: { article: Article; imageFile: File | null }): void {
    const request$ = this.editArticle
      ? this.articlesService.updateArticle(event.article, event.imageFile)
      : this.articlesService.addArticle(event.article, event.imageFile);

    request$.subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.savePage(1);
      this.store.total = response.total;
    });

    this.showForm = false;
    this.editArticle = null;
  }

  protected onDelete(id: string): void {
    this.articlesService.deleteArticle(id).subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.total = response.total;
    });
  }

  protected onShowStats(): void {
    alert(`Статей всего: ${this.store.total}`);
  }
}
