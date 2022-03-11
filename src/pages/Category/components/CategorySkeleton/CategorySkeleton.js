import styles from "../CategoryCard/CategoryCard.module.sass";
import globalStyles from "styles/global.module.sass";
import { skeleton } from "utils/utils";

export const CategorySkeleton = ({ count }) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(
            <div key={i} className={styles.card}>
                <img src="#" alt="" className={globalStyles.skeleton}/>
                {skeleton(5)}
            </div>
        );
    }

    return arr;
};
