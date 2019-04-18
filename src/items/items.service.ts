import axios from 'axios';
import config from '../config';
import { searchItemsMapper, detailItemsMapper } from './mappers';
import { SearchResponse } from './models/search-response.interface';
import { DetailResponse } from './models/detail-response.interface';
import { findMaxCategory } from './helpers/findMaxCategory';

export class ItemsService {

    /**
     * Get all results by search query
     * @param {string} query
     * @return {Promise<SearchResponse>}
     */
    public static async search(query: string) : Promise<SearchResponse> {
        const { data } = await axios.get(`${config.api.basePath}/sites/MLA/search`, {
            params: {
                q: query,
                paging: true,
                limit: 4
            }
        });
        const breadcrumbCategory = await this.getBreadCrumb(findMaxCategory(data.results));
        return searchItemsMapper(data, breadcrumbCategory.data);
    }

    /**
     * Get detail by id item 
     * @param {string} id
     * @return {Promise<DetailResponse>}
     */
    public static async detailById(id: string) : Promise<DetailResponse> {
        const [itemInfo , itemDescription ] = await Promise.all([
            axios.get(`${config.api.basePath}/items/${id}`),
            axios.get(`${config.api.basePath}/items/${id}/description`)
        ]);
        const breadcrumbCategory = await this.getBreadCrumb(itemInfo.data.category_id);
        return detailItemsMapper(itemInfo.data, itemDescription.data, breadcrumbCategory.data);
    }

    /**
     * Get categories by idCategory
     * @param {string} idCategory
     * @return {Promise<Object>}
     */
    private static getBreadCrumb(idCategory: string) {
        return axios.get(`${config.api.basePath}/categories/${idCategory}`);
    }

}

