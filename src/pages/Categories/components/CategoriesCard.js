import styles from './CategoriesCard.module.sass';
import { Typography } from "../../../typography/Typography";
import { Link } from "react-router-dom";

export const CategoriesCard = ({ title, imageURL, description }) => {
    return (
        <Link className={styles.card} to={`/categories/${title}`}>
            <div className={styles.header}>
                <img src={imageURL} alt="" />
                <Typography.Title>{title}</Typography.Title>
            </div>
            <Typography.Regular>{description}</Typography.Regular>
        </Link>
    );
};
