import styles from './Category.module.sass';
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { CategoryCard } from "./components/CategoryCard/CategoryCard";
import { URLS } from "../../api/urls";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs";
import { CategorySkeleton } from "./components/CategorySkeleton/CategorySkeleton";
import { Error } from "../../components/Error/Error";

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
            <Breadcrumbs breadcrumbArr={breadcrumbArr} className={styles.breadcrumbs} />
            {loading &&
                <div className={styles.container}>
                    <CategorySkeleton count={30} />
                </div>
            }

            {error && <Error />}

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
