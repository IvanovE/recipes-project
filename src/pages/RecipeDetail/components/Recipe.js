import styles from './Recipe.module.sass';
import { Typography } from "../../../typography/Typography";
import { TEXT } from "../../../constants/text";
import { transformedVideoUrl, transformIngredients } from "../../../utils/utils";
import cn from 'classnames';

export const Recipe = ({ data }) => {
    const recipeInfo = data.meals[0];
    const transformedIngredients = transformIngredients(recipeInfo);
    const transformedVideo = transformedVideoUrl(recipeInfo.strYoutube);
    const tags = recipeInfo.strTags
        ? <li><Typography.Subtitle>{TEXT.tags} {recipeInfo.strTags}</Typography.Subtitle></li>
        : '';


    return (
        <>
            <div className={styles.header}>
                <img src={recipeInfo.strMealThumb} alt="Meal" />
                <ul className={cn(styles.list, styles.marks)}>
                    <li><Typography.Subtitle>{TEXT.category} {recipeInfo.strCategory}</Typography.Subtitle></li>
                    <li><Typography.Subtitle>{TEXT.name} {recipeInfo.strMeal}</Typography.Subtitle></li>
                    <li><Typography.Subtitle>{TEXT.area} {recipeInfo.strArea}</Typography.Subtitle></li>
                    {tags}
                </ul>
            </div>

            <div className={styles.info}>
                <div className={styles.ingredients}>
                    <Typography.Subtitle className={styles.mb}>{TEXT.ingredients}</Typography.Subtitle>
                    <ul className={cn(styles.list, styles.text)}>
                        {transformedIngredients.map((ingredient, index) =>
                            <li key={index}>
                                <Typography.Regular>
                                    {ingredient.ingredient} {ingredient.proportion === ''
                                        ? ''
                                        : `- ${ingredient.proportion}`
                                    }
                                </Typography.Regular>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={styles.instructions}>
                    <Typography.Subtitle className={styles.mb}>{TEXT.instructions}</Typography.Subtitle>
                    <Typography.Regular>{recipeInfo.strInstructions}</Typography.Regular>
                </div>
            </div>

            {transformedVideo &&
                <div className={styles.container}>
                    <iframe
                        title={recipeInfo.idMeal}
                        src={transformedVideo}
                        className={styles.video}
                    >
                    </iframe>
                </div>
            }
        </>
    );
};
