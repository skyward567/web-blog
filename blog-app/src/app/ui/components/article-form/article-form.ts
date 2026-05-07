import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-article-form',
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm implements OnInit {
  // Если передана статья — форма в режиме редактирования
  // Если null — режим добавления
  @Input() public editArticle: Article | null = null;

  @Output() public save = new EventEmitter<Article>();
  @Output() public cancel = new EventEmitter<void>();

  protected form!: FormGroup;

  // Заголовок и текст кнопки зависят от режима
  protected get formTitle(): string {
    return this.editArticle ? 'Изменить статью' : 'Создать статью';
  }

  protected get saveLabel(): string {
    return this.editArticle ? 'Сохранить' : 'Добавить';
  }

  // Геттеры для удобного доступа к полям в шаблоне
  protected get titleControl() {
    return this.form.get('title');
  }
  protected get textControl() {
    return this.form.get('text');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      // Заголовок: обязательный, минимум 25 символов
      title: [this.editArticle?.title ?? '', [Validators.required, Validators.minLength(25)]],
      // Текст: только обязательный
      text: [this.editArticle?.text ?? '', [Validators.required]],
    });
  }

  protected onSave(): void {
    if (this.form.invalid) return;

    const { title, text } = this.form.value;

    const article: Article = {
      // При редактировании сохраняем старый id и дату
      id: this.editArticle?.id ?? Date.now(),
      date:
        this.editArticle?.date ??
        new Date().toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      title: title.trim(),
      text: text.trim(),
      rating: 0,
    };

    this.save.emit(article);
    this.form.reset();
  }

  protected onCancel(): void {
    this.form.reset();
    this.cancel.emit();
  }
}
