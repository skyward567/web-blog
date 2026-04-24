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
  // null — форма скрыта
  // null editArticle + showForm=true — режим добавления
  // Article editArticle + showForm=true — режим редактирования
  protected showForm = false;
  protected editArticle: Article | null = null;

  protected articles: Article[] = [
    {
      id: 1,
      title: 'Почему Java остаётся востребованным языком в 2024 году',
      text: 'Java существует уже почти 30 лет, но по-прежнему входит в топ самых популярных языков.',
      date: '10 декабря 2024',
    },
    {
      id: 2,
      title: 'Основы ООП в Java: классы, объекты и наследование',
      text: 'Объектно-ориентированное программирование — сердце Java. Разберём ключевые концепции.',
      date: '1 декабря 2024',
    },
    {
      id: 3,
      title: 'C++ vs Java: что выбрать начинающему разработчику',
      text: 'Сравним управление памятью, производительность и экосистему двух языков.',
      date: '25 ноября 2024',
    },
  ];

  // Количество статей — считывается из массива
  protected get postCount(): number {
    return this.articles.length;
  }

  // Открыть форму добавления
  protected onShowCreateForm(): void {
    this.editArticle = null;
    this.showForm = true;
  }

  // Открыть форму редактирования — передаём статью
  protected onShowEditForm(article: Article): void {
    this.editArticle = article;
    this.showForm = true;
  }

  // Скрыть форму
  protected onCancelForm(): void {
    this.showForm = false;
    this.editArticle = null;
  }

  // Сохранение — добавление или обновление в зависимости от режима
  protected onSave(article: Article): void {
    if (this.editArticle) {
      // Режим редактирования — заменяем статью в массиве
      this.articles = this.articles.map((a) => (a.id === article.id ? article : a));
    } else {
      // Режим добавления — вставляем в начало
      this.articles.unshift(article);
    }

    this.showForm = false;
    this.editArticle = null;
  }

  // Удаление статьи из массива
  protected onDelete(id: number): void {
    this.articles = this.articles.filter((a) => a.id !== id);
  }

  // Показать статистику
  protected onShowStats(): void {
    alert(`Статей на странице: ${this.postCount}`);
  }
}
