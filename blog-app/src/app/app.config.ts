import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { ARTICLES_SERVICE_TOKEN } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesApiService } from './services/articles/articles-api.service';
import { POST_SERVICE_TOKEN } from './services/post/post-service.token';
import { PostService } from './services/post/post.service';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), // нужен для HttpClient
    {
      provide: ARTICLES_SERVICE_TOKEN,
      // Локально — ApiService (бэкенд), в production — localStorage
      useClass: environment.useApi ? ArticlesApiService : ArticlesService,
    },
    {
      provide: POST_SERVICE_TOKEN,
      useClass: PostService,
    },
  ],
};
