import styles from './Categories.module.sass';
import useFetch from 'use-http';
import { CategoriesCard } from "./components/CategoriesCard";
import { URLS } from "../../api/urls";

export const Categories = () => {
    const { loading, error, data } = useFetch(
        URLS.Categories(),
        {},
        []);

    return (
        <div className={styles.container}>
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}

            {!loading && !error && data.categories.map(category => {
                return <CategoriesCard
                    key={category["idCategory"]}
                    title={category["strCategory"]}
                    imageURL={category["strCategoryThumb"]}
                    description={category["strCategoryDescription"]}
                />;
            })}
        </div>
    );
};
