import useFetch from "use-http";
import { useParams } from "react-router-dom";
import { Recipe } from "./components/Recipe";
import { URLS } from "../../api/urls";

export const RecipeDetail = () => {
    const { idMeal } = useParams();
    const { loading, error, data } = useFetch(
        URLS.Recipe(idMeal),
        {},
        []
    );

    return (
        <>
            {loading && <div>Loading</div>}
            {error && <div>ERROR</div>}

            {!loading && !error && <Recipe data={data} />}
        </>
    );
};
