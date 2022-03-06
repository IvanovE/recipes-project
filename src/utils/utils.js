import cn from "classnames";
import globalStyles from "../styles/global.module.sass";

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

export const skeletonDivArray = (count, className) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(
            <div key={i} className={cn(globalStyles.skeleton, globalStyles["skeleton-text"], className)} />
        );
    }
    return arr;
};
