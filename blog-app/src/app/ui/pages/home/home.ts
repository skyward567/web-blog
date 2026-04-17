import { Component } from '@angular/core';
import { Article } from '../../../models/article';
import { ArticleCardHome } from '../../components/article-card-home/article-card-home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ArticleCardHome, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  articles: Article[] = [
    {
      id: 1,
      title: 'Почему Java остаётся востребованным языком',
      text: 'Java существует уже почти 30 лет...',
      date: '10 декабря 2024',
    },
    { id: 2, title: 'Основы ООП в Java', text: 'ООП — сердце Java...', date: '1 декабря 2024' },
    { id: 3, title: 'C++ vs Java', text: 'Сравним два языка...', date: '25 ноября 2024' },
  ];
}
