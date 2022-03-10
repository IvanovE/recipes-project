export const URLS = {
    Categories: () => {
        return "https://www.themealdb.com/api/json/v1/1/categories.php";
    },

    Category: (category) => {
        return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    },

    Recipe: () => {
        return "https://www.themealdb.com/api/json/v1/1/lookup.php";
    },

    Random: () => {
        return "https://www.themealdb.com/api/json/v1/1/random.php";
    },

    Search: (name) => {
        return `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    }
};
