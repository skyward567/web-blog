import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';
import { IPostService, PostData } from './post-service.interface';

const ARTICLES_KEY = 'blog_posts';
const COMMENTS_KEY = 'blog_comments';

@Injectable({ providedIn: 'root' })
export class PostService implements IPostService {
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

  private loadAllComments(): Record<string, Comment[]> {
    try {
      return JSON.parse(localStorage.getItem(COMMENTS_KEY) ?? '{}');
    } catch {
      return {};
    }
  }

  private saveAllComments(all: Record<string, Comment[]>): void {
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
  }

  private loadComments(articleId: string): Comment[] {
    return this.loadAllComments()[articleId] ?? [];
  }

  public getPost(id: string): Observable<PostData> {
    const article = this.loadArticles().find((a) => a.id === id) ?? null;
    if (!article) {
      return of({
        article: { id: '', title: '', content: '', date: '', rating: 0 },
        comments: [],
      });
    }
    return of({ article, comments: this.loadComments(id) });
  }

  public addComment(articleId: string, comment: Comment): Observable<Comment[]> {
    const all = this.loadAllComments();
    const comments = all[articleId] ?? [];
    comments.push(comment);
    all[articleId] = comments;
    this.saveAllComments(all);
    return of(comments);
  }

  public updateCommentRating(
    articleId: string,
    commentId: string,
    delta: number,
  ): Observable<Comment[]> {
    const all = this.loadAllComments();
    const comments = (all[articleId] ?? []).map((c) =>
      c.id === commentId ? { ...c, rating: c.rating + delta } : c,
    );
    all[articleId] = comments;
    this.saveAllComments(all);
    return of(comments);
  }

  public updateArticleRating(articleId: string, delta: number): Observable<Article> {
    const articles = this.loadArticles().map((a) =>
      a.id === articleId ? { ...a, rating: a.rating + delta } : a,
    );
    this.saveArticles(articles);
    return of(articles.find((a) => a.id === articleId)!);
  }
}
