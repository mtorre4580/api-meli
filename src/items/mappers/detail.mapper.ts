import * as sanitizeHtml from 'sanitize-html';
import { DetailResponse } from '../models/detail-response.interface';
import { categoryMapper } from './category.mapper';

/**
 * Mapper the result for show detail in front and sanitize html
 * @param {Object} responseInfo 
 * @param  {Object} responseDescription 
 * @return {DetailResponse} 
 */
export function detailItemsMapper(responseInfo, responseDescription, responseCategories) : DetailResponse {
    return {
        author: {
            name: 'Matias Daniel',
            lastname: 'Torre'
        },
        item: {
            id: responseInfo.id,
            title: responseInfo.title,
            price: {
                currency: responseInfo.currency_id,
                amount: responseInfo.price,
                decimals: null
            },
            picture: responseInfo.pictures.length ? responseInfo.pictures[0].secure_url : null,
            condition: responseInfo.condition,
            free_shipping: responseInfo.shipping.free_shipping,
            sold_quantity: responseInfo.sold_quantity,
            description: sanitizeHtml(responseDescription.plain_text)
        },
        categories: categoryMapper(responseCategories)
    }
}