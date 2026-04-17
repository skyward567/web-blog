import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardHome } from './article-card-home';

describe('ArticleCardHome', () => {
  let component: ArticleCardHome;
  let fixture: ComponentFixture<ArticleCardHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardHome],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCardHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
