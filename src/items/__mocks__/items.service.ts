import { responseMockSearch, responseMockDetail } from './items.response';

/**
 * Mock service API
 */
export class ItemsService {

    public static search(query: string) {
        if (query === 'ipod') {
            return Promise.resolve(responseMockSearch);
        }
        throw new Error();
    }

    public static detailById(id: string) {
        if (id === 'MLA772322281') {
            return Promise.resolve(responseMockDetail);
        }
        throw new Error();
    }
  
}
