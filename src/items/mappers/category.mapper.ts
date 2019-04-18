/**
 * Get only description of category
 * @param {Object} responseCategories 
 * @return {string[]}
 */
export function categoryMapper(responseCategories) {
    const { path_from_root }  = responseCategories;
    if (path_from_root && path_from_root.length) {
        return path_from_root.map(cat => cat.name);
    }
    return [];
}