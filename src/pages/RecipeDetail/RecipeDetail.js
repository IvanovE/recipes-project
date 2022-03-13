import styles from "./RecipeDetail.module.sass";
import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { Recipe } from "./components/Recipe/Recipe";
import { URLS } from "api/urls";
import { Breadcrumbs } from "UI/Breadcrumbs/Breadcrumbs";
import { RecipeSkeleton } from "./components/RecipeSkeleton/RecipeSkeleton";
import { Error } from "components/Error/Error";
import { useEffect, useState } from "react";

export const RecipeDetail = () => {
    const { idMeal, categoryName } = useParams();
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const { response, loading, error, get } = useFetch(
        URLS.Recipe(),
        {},
        []
    );

    useEffect(() => {
        (async function fetchData() {
            const fetchedData = await get(URLS.fetchRecipe(idMeal));
            const transformedData = fetchedData.meals[0];
            if (response.ok) {
                setData(transformedData);
            }
            setTitle(transformedData.strMeal);
        })();
    }, [idMeal]);
    
    const breadcrumbs = [
        {
            title: "Categories",
            url: "/categories"
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
            <Breadcrumbs breadcrumbArr={breadcrumbs} className={styles.breadcrumbs} />

            {loading && <RecipeSkeleton />}

            {error && <Error />}

            {!loading && !error && <Recipe data={data} />}
        </>
    );
};
