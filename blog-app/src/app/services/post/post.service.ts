import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';
import { IPostService, PostData } from './post-service.interface';

const ARTICLES_KEY = 'blog_posts';
const COMMENTS_KEY = 'blog_comments'; // { [articleId]: Comment[] }

@Injectable({ providedIn: 'root' })
export class PostService implements IPostService {

  // ---------- localStorage helpers ----------

  private loadArticles(): Article[] {
    try {
      return JSON.parse(localStorage.getItem(ARTICLES_KEY) ?? '[]');
    } catch {
      return [];
    }
  }

  private saveArticles(articles: Article[]): void {
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
  }

  private loadAllComments(): Record<number, Comment[]> {
    try {
      return JSON.parse(localStorage.getItem(COMMENTS_KEY) ?? '{}');
    } catch {
      return {};
    }
  }

  private saveAllComments(all: Record<number, Comment[]>): void {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
  }

  private loadComments(articleId: number): Comment[] {
    return this.loadAllComments()[articleId] ?? [];
  }

  // ---------- Public methods ----------

  public getPost(id: number): Observable<PostData> {
    const article = this.loadArticles().find((a) => a.id === id) ?? null;
    if (!article) {
      // Вернём пустышку если статья не найдена
      return of({ article: { id: 0, title: '', text: '', date: '', rating: 0 }, comments: [] });
    }
    const comments = this.loadComments(id);
    return of({ article, comments });
  }

  public addComment(articleId: number, comment: Comment): Observable<Comment[]> {
    const all = this.loadAllComments();
    const comments = all[articleId] ?? [];
    comments.push(comment);
    all[articleId] = comments;
    this.saveAllComments(all);
    return of(comments);
  }

  public updateCommentRating(articleId: number, commentId: number, delta: number): Observable<Comment[]> {
    const all = this.loadAllComments();
    const comments = (all[articleId] ?? []).map((c) =>
      c.id === commentId ? { ...c, rating: c.rating + delta } : c
    );
    all[articleId] = comments;
    this.saveAllComments(all);
    return of(comments);
  }

  public updateArticleRating(articleId: number, delta: number): Observable<Article> {
    const articles = this.loadArticles().map((a) =>
      a.id === articleId ? { ...a, rating: a.rating + delta } : a
    );
    this.saveArticles(articles);
    const updated = articles.find((a) => a.id === articleId)!;
    return of(updated);
  }
}
