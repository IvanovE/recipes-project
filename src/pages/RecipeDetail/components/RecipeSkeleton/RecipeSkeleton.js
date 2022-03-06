import styles from "../Recipe/Recipe.module.sass";
import globalStyles from '../../../../styles/global.module.sass';
import { skeletonDivArray } from "../../../../utils/utils";

export const RecipeSkeleton = () => {

    return (
        <>
            <div className={styles.header}>
                <img src='#' alt="" className={globalStyles.skeleton} />
                <div className={styles.marks}>
                    {skeletonDivArray(4)}
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.ingredients}>
                    {skeletonDivArray(1, styles.mb)}
                    {skeletonDivArray(15)}
                </div>
                <div className={styles.instructions}>
                    {skeletonDivArray(1, styles.mb)}
                    {skeletonDivArray(30)}
                </div>
            </div>
        </>
    );
};
