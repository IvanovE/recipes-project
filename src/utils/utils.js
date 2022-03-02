export const transformIngredients = (data) => {
    const transformedData = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = data["strIngredient" + i];
        const proportion = data["strMeasure" + i];
        if (ingredient && ingredient.trim().length !== 0) {
            transformedData.push({
                ingredient,
                proportion: proportion ? proportion.trim() : ''
            });
        }
    }

    return transformedData;
};

export const transformedVideoUrl = (URL) => {
    if (URL) {
        return URL.split('watch?v=').join('embed/');
    }
    return null;
};
