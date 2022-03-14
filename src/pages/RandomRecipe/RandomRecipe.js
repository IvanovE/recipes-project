import styles from "./RandomRecipe.module.sass";
import { Recipe } from "components/RecipeInfo/Recipe/Recipe";
import { RecipeSkeleton } from "components/RecipeInfo/RecipeSkeleton/RecipeSkeleton";
import { Error } from "components/Error/Error";
import { Typography } from "typography/Typography";
import { URLS } from "api/urls";
import { TEXT } from "constants/text";
import useFetch from "use-http";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from "classnames";

export const RandomRecipe = () => {
    const [copied, setCopied] = useState(false);
    const [data, setData] = useState([]);
    const location = useLocation();
    const { response, loading, error, get, cache } = useFetch(
        URLS.Random(),
        {},
        [location.key]
    );

    useEffect(() => {
        (async function fetchData() {
            await cache.clear();
            const fetchedData = await get(URLS.Random());
            const transformedData = fetchedData.meals[0];
            if (response.ok) {
                setData(transformedData);
            }
        })();
    }, [location.key]);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(`${window.location.host}/categories/${data.strCategory}/${data.idMeal}`);
        setCopied(true);
    };
    
    return (
        <>
            <div className={styles.actions}>
                <Link className={styles.home} to={"/"}>
                    <Typography.Regular>
                        {TEXT.home}
                    </Typography.Regular>
                </Link>
                <div className={styles.copy} onClick={copyToClipboard}>
                    <Typography.Regular className={cn({
                        [styles.copied]: copied
                    })}>
                        {TEXT.copyLink}
                    </Typography.Regular>
                </div>
            </div>

            {loading && <RecipeSkeleton />}

            {error && <Error />}

            {!loading && !error && <Recipe data={data}/>}
        </>
    );
};
