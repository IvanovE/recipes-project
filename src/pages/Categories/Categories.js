import styles from './Categories.module.sass';
import useFetch from 'use-http';
import { CategoriesCard } from "./components/CategoriesCard";
import { URLS } from "../../api/urls";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs";

export const Categories = () => {
    const { loading, error, data } = useFetch(
        URLS.Categories(),
        {},
        []);

    const breadcrumbArr = [
        {
            title: 'Categories',
            url: '/categories'
        }
    ];

    return (
        <>
            {loading && <div>Loading</div>}
            {error && <div>Error</div>}

            {!loading && !error &&
                <>
                    <Breadcrumbs breadcrumbArr={breadcrumbArr} className={styles.breadcrumbs}/>
                    <div className={styles.container}>
                        {data.categories.map(category => {
                            return <CategoriesCard
                                key={category["idCategory"]}
                                title={category["strCategory"]}
                                imageURL={category["strCategoryThumb"]}
                                description={category["strCategoryDescription"]}
                            />;
                        })}
                    </div>
                </>
            }
        </>
    );
};
