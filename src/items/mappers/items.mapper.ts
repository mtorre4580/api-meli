import { Item } from '../models/item.interface';

/**
 * Mapper the items 
 * @param {Object} response
 * @return {Item[]}
 */
export function itemsMapper(response) : Item[] {
    const { results } = response;
    return results.map(result => {
        return {
            id: result.id,
            title: result.title,
            price: {
                currency: result.currency_id,
                amount: result.price,
                decimals: null
            },
            picture: result.thumbnail,
            condition: result.condition,
            free_shipping: result.shipping.free_shipping,
            location: result.address.state_name
        }
    });
}