export interface Article {
  id: string; // UUID от бэкенда, либо строка из Date.now() для localStorage
  title: string;
  content: string; // переименовано из text в content (как на бэкенде)
  date: string;
  rating: number;
  categoryId?: string | null;
  imageUrl?: string | null; // URL картинки с бэкенда
}
