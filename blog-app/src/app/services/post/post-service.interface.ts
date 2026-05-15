import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

export interface PostData {
  article: Article;
  comments: Comment[];
}

export interface IPostService {
  getPost(id: string): Observable<PostData>;
  addComment(articleId: string, comment: Comment): Observable<Comment[]>;
  updateCommentRating(articleId: string, commentId: string, delta: number): Observable<Comment[]>;
  updateArticleRating(articleId: string, delta: number): Observable<Article>;
}
