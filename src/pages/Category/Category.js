import styles from './Category.module.sass';
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { CategoryCard } from "./components/CategoryCard";
import { URLS } from "../../api/urls";

export const Category = () => {
    const { categoryName } = useParams();

    const { loading, error, data } = useFetch(
        URLS.Category(categoryName),
        {},
        []);

    return (
        <div className={styles.container}>
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}

            {!loading && !error && data.meals.map(meal => {
                return <CategoryCard
                    key={meal["idMeal"]}
                    id={meal["idMeal"]}
                    category={categoryName}
                    title={meal["strMeal"]}
                    imageURL={meal["strMealThumb"]}
                />;
            })}
        </div>
    );
};
