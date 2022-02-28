const errorMessages = {
    categoriesError: 'Could not fetch categories.',
    recipeByIdError: 'Could not fetch recipe.',
    randomRecipeError: 'Could not fetch random recipe.'
};

export const getCategories = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || errorMessages.categoriesError);
    }

    return data.categories;
};

export const getCategory = async (category) => {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(errorMessages.categoriesError);
    }

    return data.meals;
};

export const getRecipeById = async (id) => {
    const response = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(errorMessages.recipeByIdError);
    }

    return data.meals;
};

export const getRandomRecipe = async () => {
    const response = await fetch('www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();

    if (!response.ok) {
        throw new Error(errorMessages.randomRecipeError);
    }

    return data.meals;
};
