import { Component, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, of, startWith, map, switchMap } from 'rxjs';
import { Article } from '../../../models/article';
import { Category } from '../../../models/category';
import { CategoriesService } from '../../../services/categories/categories.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-article-form',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss',
})
export class ArticleForm implements OnInit {
  @Input() public editArticle: Article | null = null;
  @Output() public save = new EventEmitter<{ article: Article; imageFile: File | null }>();
  @Output() public cancel = new EventEmitter<void>();

  protected form!: FormGroup;
  protected selectedImageFile: File | null = null;
  protected imagePreview: string | null = null;
  protected allCategories: Category[] = [];
  protected filteredCategories$!: Observable<Category[]>;

  // Показывать поле категории только если работаем с API
  protected readonly useApi = environment.useApi;

  private fb = inject(FormBuilder);
  private categoriesService = inject(CategoriesService);

  protected get formTitle(): string {
    return this.editArticle ? 'Изменить статью' : 'Создать статью';
  }

  protected get saveLabel(): string {
    return this.editArticle ? 'Сохранить' : 'Добавить';
  }

  protected get titleControl() {
    return this.form.get('title');
  }
  protected get contentControl() {
    return this.form.get('content');
  }
  protected get categoryControl() {
    return this.form.get('category');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.editArticle?.title ?? '', [Validators.required, Validators.minLength(25)]],
      content: [this.editArticle?.content ?? '', [Validators.required]],
      category: [this.editArticle?.categoryId ?? ''],
    });

    // Показываем превью если редактируем статью с картинкой
    if (this.editArticle?.imageUrl) {
      this.imagePreview = this.editArticle.imageUrl;
    }

    // Загружаем категории для autocomplete (только при работе с API)
    if (this.useApi) {
      this.categoriesService.getCategories().subscribe((cats) => {
        this.allCategories = cats;
      });

      this.filteredCategories$ = this.form.get('category')!.valueChanges.pipe(
        startWith(''),
        map((value) => this.filterCategories(value ?? '')),
      );
    } else {
      this.filteredCategories$ = of([]);
    }
  }

  private filterCategories(value: string): Category[] {
    const lower = value.toLowerCase();
    return this.allCategories.filter((c) => c.name.toLowerCase().includes(lower));
  }

  // Обработка выбора файла картинки
  protected onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.selectedImageFile = file;

    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imagePreview = reader.result as string);
      reader.readAsDataURL(file);
    } else {
      this.imagePreview = null;
    }
  }

  protected onSave(): void {
    if (this.form.invalid) return;
    const { title, content, category } = this.form.value;

    // Находим категорию в списке или null
    const existingCategory = this.allCategories.find(
      (c) => c.name.toLowerCase() === (category ?? '').toLowerCase(),
    );

    const article: Article = {
      id: this.editArticle?.id ?? '',
      date:
        this.editArticle?.date ??
        new Date().toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      title: title.trim(),
      content: content.trim(),
      rating: this.editArticle?.rating ?? 0,
      categoryId: existingCategory?.id ?? null,
      imageUrl: this.editArticle?.imageUrl ?? null,
    };

    // Если введена новая категория которой нет — создаём её сначала
    if (this.useApi && category && !existingCategory) {
      this.categoriesService.createCategory(category.trim()).subscribe((newCat) => {
        article.categoryId = newCat.id;
        this.save.emit({ article, imageFile: this.selectedImageFile });
      });
    } else {
      this.save.emit({ article, imageFile: this.selectedImageFile });
    }

    this.form.reset();
    this.selectedImageFile = null;
    this.imagePreview = null;
  }

  protected onCancel(): void {
    this.form.reset();
    this.selectedImageFile = null;
    this.imagePreview = null;
    this.cancel.emit();
  }
}
