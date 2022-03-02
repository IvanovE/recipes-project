export const URLS = {
    Categories: () => {
        return 'https://www.themealdb.com/api/json/v1/1/categories.php';
    },

    Category: (category) => {
        return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    },

    Recipe: (id) => {
        return `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    },

    Random: () => {
        return 'www.themealdb.com/api/json/v1/1/random.php';
    }
};
