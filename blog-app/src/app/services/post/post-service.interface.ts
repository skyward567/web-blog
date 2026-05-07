import { Observable } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

export interface PostData {
  article: Article;
  comments: Comment[];
}

export interface IPostService {
  getPost(id: number): Observable<PostData>;
  addComment(articleId: number, comment: Comment): Observable<Comment[]>;
  updateCommentRating(articleId: number, commentId: number, delta: number): Observable<Comment[]>;
  updateArticleRating(articleId: number, delta: number): Observable<Article>;
}
