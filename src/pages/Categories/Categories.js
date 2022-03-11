import styles from "./Categories.module.sass";
import useFetch from "use-http";
import { CategoriesCard } from "./components/CategoriesCard/CategoriesCard";
import { URLS } from "api/urls";
import { Breadcrumbs } from "UI/Breadcrumbs/Breadcrumbs";
import { CategoriesSkeleton } from "./components/CategoriesSkeleton/CategoriesSkeleton";
import { Error } from "components/Error/Error";

export const Categories = () => {
    const { loading, error, data } = useFetch(
        URLS.Categories(),
        {},
        []);

    const breadcrumbs = [
        {
            title: "Categories",
            url: "/categories"
        }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbArr={breadcrumbs} className={styles.breadcrumbs}/>

            {loading &&
                <div className={styles.container}>
                    <CategoriesSkeleton count={30} />
                </div>
            }

            {error && <Error />}

            {!loading && !error &&
                <>
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
