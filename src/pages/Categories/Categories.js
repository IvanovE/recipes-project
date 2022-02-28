import styles from './Categories.module.sass';
import useFetch from 'use-http';
import { CategoryCard } from "./components/CategoryCard";

export const Categories = () => {
    const { loading, error, data } = useFetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
        {},
        []);

    return (
        <div className={styles.container}>
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}

            {!loading && !error && data.categories.map(category => {
                return <CategoryCard
                    key={category["idCategory"]}
                    title={category["strCategory"]}
                    imageURL={category["strCategoryThumb"]}
                    description={category["strCategoryDescription"]}
                />;
            }
            )}
        </div>
    );
};
