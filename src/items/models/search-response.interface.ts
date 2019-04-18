import { Author } from './author.interface';
import { Item } from './item.interface';

export interface SearchResponse {
    author: Author;
    categories: string[];
    items: Item[];
}