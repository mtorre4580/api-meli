import { Author } from './author.interface';
import { Item } from './item.interface';

export interface DetailResponse {
    author: Author;
    item: Item;
    categories: string[];
}