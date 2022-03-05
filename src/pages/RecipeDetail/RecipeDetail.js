import styles from './RecipeDetail.module.sass';
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { Recipe } from "./components/Recipe";
import { URLS } from "../../api/urls";
import { Breadcrumbs } from "../../UI/Breadcrumbs/Breadcrumbs";

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
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}
            <Breadcrumbs breadcrumbArr={breadcrumbsArr} className={styles.breadcrumbs} />
            {!loading && !error && <Recipe data={data} />}
        </>
    );
};
