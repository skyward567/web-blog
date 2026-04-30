import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ARTICLES_SERVICE_TOKEN } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Регистрируем сервис через токен
    // Теперь можно внедрять через @Inject(ARTICLES_SERVICE_TOKEN)
    {
      provide: ARTICLES_SERVICE_TOKEN,
      useClass: ArticlesService,
    },
  ],
};
