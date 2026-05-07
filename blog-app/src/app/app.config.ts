import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { ARTICLES_SERVICE_TOKEN } from './services/articles/articles-service.token';
import { ArticlesService } from './services/articles/articles.service';
import { POST_SERVICE_TOKEN } from './services/post/post-service.token';
import { PostService } from './services/post/post.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(), // нужно для Angular Material
    {
      provide: ARTICLES_SERVICE_TOKEN,
      useClass: ArticlesService,
    },
    {
      provide: POST_SERVICE_TOKEN,
      useClass: PostService,
    },
  ],
};
