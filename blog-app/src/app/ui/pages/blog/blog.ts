import { Component } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleCardBlog } from '../../components/article-card-blog/article-card-blog';
import { ArticleForm } from '../../components/article-form/article-form';

@Component({
  selector: 'app-blog',
  imports: [ArticleCardBlog, ArticleForm],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  showForm = false;

  articles: Article[] = [
    {
      id: 1,
      title: 'Почему Java остаётся востребованным языком',
      text: 'Java существует уже почти 30 лет...',
      date: '10 декабря 2024',
    },
    {
      id: 2,
      title: 'Основы ООП в Java',
      text: 'Объектно-ориентированное программирование — сердце Java...',
      date: '1 декабря 2024',
    },
    {
      id: 3,
      title: 'C++ vs Java',
      text: 'Сравним управление памятью, производительность...',
      date: '25 ноября 2024',
    },
  ];

  get postCount(): number {
    return this.articles.length;
  }

  onSave(article: Article) {
    this.articles.unshift(article);
    this.showForm = false;
  }

  onDelete(id: number) {
    this.articles = this.articles.filter((a) => a.id !== id);
  }
}
