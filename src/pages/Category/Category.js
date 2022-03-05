import styles from './Category.module.sass';
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { CategoryCard } from "./components/CategoryCard";
import { URLS } from "../../api/urls";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs";

export const Category = () => {
    const { categoryName } = useParams();

    const { loading, error, data } = useFetch(
        URLS.Category(categoryName),
        {},
        []);

    const breadcrumbArr = [
        {
            title: 'Categories',
            url: `/categories`
        },
        {
            title: categoryName,
            url: `/categories/${categoryName}`
        }
    ];

    return (
        <>
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}
            <Breadcrumbs breadcrumbArr={breadcrumbArr} className={styles.breadcrumbs} />
            <div className={styles.container}>
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
        </>
    );
};
