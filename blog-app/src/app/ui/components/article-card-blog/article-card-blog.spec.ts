import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardBlog } from './article-card-blog';

describe('ArticleCardBlog', () => {
  let component: ArticleCardBlog;
  let fixture: ComponentFixture<ArticleCardBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardBlog],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCardBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
