import styles from "../Recipe/Recipe.module.sass";
import globalStyles from "styles/global.module.sass";
import { skeleton } from "utils/utils";

export const RecipeSkeleton = () => {

    return (
        <>
            <div className={styles.header}>
                <img src='#' alt="" className={globalStyles.skeleton} />
                <div className={styles.marks}>
                    {skeleton(4)}
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.ingredients}>
                    {skeleton(1, styles.mb)}
                    {skeleton(15)}
                </div>
                <div className={styles.instructions}>
                    {skeleton(1, styles.mb)}
                    {skeleton(30)}
                </div>
            </div>
        </>
    );
};
