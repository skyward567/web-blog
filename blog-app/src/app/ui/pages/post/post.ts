import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Comment } from '../../../models/comment';
import { POST_SERVICE_TOKEN } from '../../../services/post/post-service.token';
import { IPostService } from '../../../services/post/post-service.interface';
import { PostStoreService } from '../../../services/post/post-store.service';

@Component({
  selector: 'app-post',
  imports: [
    RouterLink,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit, OnDestroy {
  protected newAuthor = '';
  protected newText = '';

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    @Inject(POST_SERVICE_TOKEN) private postService: IPostService,
    protected store: PostStoreService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.store.clear();
    this.postService.getPost(id).subscribe((data) => {
      this.store.saveArticle(data.article);
      this.store.saveComments(data.comments);
      this.titleService.setTitle(data.article.title || 'Пост');
    });
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('Блог');
  }

  protected onArticleRating(delta: number): void {
    if (!this.store.article) return;
    this.postService.updateArticleRating(this.store.article.id, delta).subscribe((updated) => {
      this.store.saveArticle(updated);
    });
  }

  protected onCommentRating(commentId: string, delta: number): void {
    if (!this.store.article) return;
    this.postService
      .updateCommentRating(this.store.article.id, commentId, delta)
      .subscribe((comments) => {
        this.store.saveComments(comments);
      });
  }

  protected onAddComment(): void {
    if (!this.newAuthor.trim() || !this.newText.trim() || !this.store.article) return;

    const comment: Comment = {
      id: Date.now().toString(), // string
      username: this.newAuthor.trim(), // username вместо author
      content: this.newText.trim(), // content вместо text
      date: new Date().toLocaleDateString('ru-RU'),
      rating: 0,
      articleId: this.store.article.id,
    };

    this.postService.addComment(this.store.article.id, comment).subscribe((comments) => {
      this.store.saveComments(comments);
    });

    this.newAuthor = '';
    this.newText = '';
  }
}
