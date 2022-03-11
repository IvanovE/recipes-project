import styles from "../CategoriesCard/CategoriesCard.module.sass";
import globalStyles from "styles/global.module.sass";
import { skeleton } from "utils/utils";

export const CategoriesSkeleton = ({ count }) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(
            <div key={i} className={styles.card}>
                <div className={styles.header}>
                    <img src="#" alt="" className={globalStyles.skeleton} />
                    {skeleton(1)}
                </div>
                {skeleton(4)}
            </div>
        );
    }

    return arr;
};
