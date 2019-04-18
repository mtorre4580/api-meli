import { Price } from './price.interface';

export interface Item {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    location?: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
}