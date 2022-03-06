import styles from '../CategoryCard/CategoryCard.module.sass';
import globalStyles from '../../../../styles/global.module.sass';
import { skeletonDivArray } from "../../../../utils/utils";

export const CategorySkeleton = ({ count }) => {
    const skeletonArr = [];
    for (let i = 0; i < count; i++) {
        skeletonArr.push(
            <div key={i} className={styles.card}>
                <img src="#" alt="" className={globalStyles.skeleton}/>
                {skeletonDivArray(5)}
            </div>
        );
    }

    return skeletonArr;
};
