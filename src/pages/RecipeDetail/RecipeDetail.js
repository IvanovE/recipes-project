import styles from './RecipeDetail.module.sass';
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { Recipe } from "./components/Recipe/Recipe";
import { URLS } from "../../api/urls";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs";
import { RecipeSkeleton } from "./components/RecipeSkeleton/RecipeSkeleton";
import { Error } from "../../components/Error/Error";

export const RecipeDetail = () => {
    const { idMeal, categoryName } = useParams();
    const { loading, error, data } = useFetch(
        URLS.Recipe(idMeal),
        {},
        []
    );

    let title = '';
    if (!loading && !error) {
        title = data.meals[0].strMeal;
    }
    
    const breadcrumbsArr = [
        {
            title: 'Categories',
            url: '/categories'
        },
        {
            title: categoryName,
            url: `/categories/${categoryName}`
        },
        {
            title: title,
            url: `/categories/${categoryName}/${idMeal}`
        }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbArr={breadcrumbsArr} className={styles.breadcrumbs} />

            {loading && <RecipeSkeleton />}

            {error && <Error />}

            {!loading && !error && <Recipe data={data} />}
        </>
    );
};
