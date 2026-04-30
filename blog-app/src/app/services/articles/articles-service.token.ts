import { InjectionToken } from '@angular/core';
import { IArticlesService } from './articles-service.interface';

// Токен используется для внедрения зависимости через интерфейс
// Вместо того чтобы внедрять конкретный класс — внедряем через токен
// Это позволяет легко заменить реализацию (например для тестов)
export const ARTICLES_SERVICE_TOKEN = new InjectionToken<IArticlesService>('IArticlesService');
