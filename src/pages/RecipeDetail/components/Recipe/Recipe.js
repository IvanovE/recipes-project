import styles from "./Recipe.module.sass";
import { Typography } from "../../../../typography/Typography";
import { TEXT } from "../../../../constants/text";
import { transformedVideoUrl, transformIngredients } from "../../../../utils/utils";

export const Recipe = ({ data }) => {
    const transformedIngredients = transformIngredients(data);
    const transformedVideo = transformedVideoUrl(data.strYoutube);
    const tags = data.strTags
        ? <li><Typography.Subtitle>{TEXT.tags} {data.strTags}</Typography.Subtitle></li>
        : "";


    return (
        <>
            <div className={styles.header}>
                <img src={data.strMealThumb} alt="Meal" />
                <ul className={styles.marks}>
                    <li><Typography.Subtitle>{TEXT.category} {data.strCategory}</Typography.Subtitle></li>
                    <li><Typography.Subtitle>{TEXT.name} {data.strMeal}</Typography.Subtitle></li>
                    <li><Typography.Subtitle>{TEXT.area} {data.strArea}</Typography.Subtitle></li>
                    {tags}
                </ul>
            </div>

            <div className={styles.info}>
                <div className={styles.ingredients}>
                    <Typography.Subtitle className={styles.mb}>{TEXT.ingredients}</Typography.Subtitle>
                    <ul>
                        {transformedIngredients.map((ingredient, index) =>
                            <li key={index}>
                                <Typography.Regular>
                                    {ingredient.ingredient} {ingredient.proportion === ""
                                        ? ""
                                        : `- ${ingredient.proportion}`
                                    }
                                </Typography.Regular>
                            </li>
                        )}
                    </ul>
                </div>

                <div className={styles.instructions}>
                    <Typography.Subtitle className={styles.mb}>{TEXT.instructions}</Typography.Subtitle>
                    <Typography.Regular>{data.strInstructions}</Typography.Regular>
                </div>
            </div>

            {transformedVideo &&
                <div className={styles.container}>
                    <iframe
                        title={data.idMeal}
                        src={transformedVideo}
                        className={styles.video}
                    >
                    </iframe>
                </div>
            }
        </>
    );
};
