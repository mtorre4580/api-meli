/**
 * Helper to get the max ocurrences of category in results
 */
export function findMaxCategory(results) : string {
    let catMap = {};
    results.forEach(result => {
      if (catMap[result.category_id] !== undefined) {
        catMap[result.category_id] = catMap[result.category_id] + 1;
      } else {
        catMap[result.category_id] = 0;
      }
    });
    return Object.keys(catMap).reduce((a, b) => catMap[a] > catMap[b] ? a : b);
}