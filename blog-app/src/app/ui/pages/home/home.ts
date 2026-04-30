import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../../models/article';
import { ArticleCardHome } from '../../components/article-card-home/article-card-home';
import { ARTICLES_SERVICE_TOKEN } from '../../../services/articles/articles-service.token';
import { IArticlesService } from '../../../services/articles/articles-service.interface';
import { ArticlesStoreService } from '../../../services/articles/articles-store.service';

@Component({
  selector: 'app-home',
  imports: [ArticleCardHome, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  // Данные для блоков — вынесены в массивы для @for
  protected hobbies = [
    {
      src: 'https://fireseo.ru/wp-content/uploads/2022/06/programming.jpeg',
      alt: 'Программирование',
      label: 'Программирование',
    },
    {
      src: 'https://i.work.ua/cdn-cgi/image/f=jpeg/article/1161b.jpg',
      alt: 'Чтение',
      label: 'Чтение',
    },
    {
      src: 'https://soberhotel.ru/wp-content/uploads/2023/10/treking_foto-1024x490.jpg',
      alt: 'Пешие прогулки',
      label: 'Пешие прогулки',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
      alt: 'Шахматы',
      label: 'Шахматы',
    },
  ];

  protected skills = [
    'Python',
    'C',
    'C++',
    'C#',
    'Java',
    'JavaScript',
    'HTML',
    'PostgreSQL',
    'Git',
    'Hyperskill',
    'ООП',
    'Бэкенд-разработка',
  ];

  protected education = [
    {
      title: 'Новосибирский Государственный Технический Университет',
      meta: '4 курс — по настоящее время',
      description:
        'Факультет автоматики и вычислительной техники. Специальность: «Информатика и вычислительная техника». Направление: «Программное обеспечение компьютерных систем и сетей».',
    },
    {
      title: 'Курсы и сертификации',
      meta: '',
      description:
        'Java Developer — Hyperskill.org (JetBrains). Java Backend Developer — Hyperskill.org (JetBrains).',
    },
  ];

  protected experience = [
    {
      title: 'Коммерческий опыт',
      description: 'Опыта в коммерческой разработке пока нет, стажировок в компаниях не проходил.',
    },
    {
      title: 'Учебные и личные проекты',
      description:
        'В рамках учёбы в университете и на интернет-курсах выполнялись небольшие проекты. Опыт командной работы — совместное выполнение лабораторных работ бригадами.',
    },
  ];

  // Две последние статьи для отображения на главной
  protected get lastArticles(): Article[] {
    return this.store.articles.slice(0, 2);
  }

  protected get hasArticles(): boolean {
    return this.store.articles.length > 0;
  }

  constructor(
    @Inject(ARTICLES_SERVICE_TOKEN) private articlesService: IArticlesService,
    protected store: ArticlesStoreService,
  ) {}

  ngOnInit(): void {
    // Проверяем хранилище — если данные уже загружены блогом, не делаем повторный запрос
    if (this.store.articles.length > 0) return;
    this.articlesService.getArticles(1).subscribe((response) => {
      this.store.saveArticles(response.items);
      this.store.total = response.total;
    });
  }
}
