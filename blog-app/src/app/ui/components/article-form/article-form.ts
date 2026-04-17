import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-form',
  imports: [FormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm {
  @Output() save = new EventEmitter<Article>();
  @Output() cancel = new EventEmitter<void>();

  title = '';
  text = '';

  onSave() {
    if (!this.title.trim() || !this.text.trim()) return;

    const article: Article = {
      id: Date.now(),
      title: this.title.trim(),
      text: this.text.trim(),
      date: new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    };

    this.save.emit(article);
    this.title = '';
    this.text = '';
  }

  onCancel() {
    this.title = '';
    this.text = '';
    this.cancel.emit();
  }
}
