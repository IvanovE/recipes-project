import styles from "../CategoriesCard/CategoriesCard.module.sass";
import globalStyles from "../../../../styles/global.module.sass";
import { skeletonDivArray } from "../../../../utils/utils";

export const CategoriesSkeleton = ({ count }) => {
    const skeletonArr = [];
    for (let i = 0; i < count; i++) {
        skeletonArr.push(
            <div key={i} className={styles.card}>
                <div className={styles.header}>
                    <img src="#" alt="" className={globalStyles.skeleton} />
                    {skeletonDivArray(1)}
                </div>
                {skeletonDivArray(4)}
            </div>
        );
    }

    return skeletonArr;
};
