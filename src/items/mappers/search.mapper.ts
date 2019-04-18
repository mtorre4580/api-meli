import { SearchResponse } from '../models/search-response.interface';
import { itemsMapper } from './items.mapper';
import { categoryMapper } from './category.mapper';

/**
 * Mapper the result for response search input
 * @param {Object} response
 * @param {Object} responseCategories
 * @return {SearchResponse}
 */
export function searchItemsMapper(response, responseCategories) : SearchResponse {
    return {
        author: {
            name: 'Matias Daniel',
            lastname: 'Torre'
        },
        categories: categoryMapper(responseCategories),
        items: itemsMapper(response),
    }
}
