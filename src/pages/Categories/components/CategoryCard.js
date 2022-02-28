import styles from './CategoryCard.module.sass';
import { Typography } from "../../../typography/Typography";
import { Link } from "react-router-dom";

export const CategoryCard = ({ title, imageURL, description }) => {
    return (
        <Link className={styles.card} to={`/categories/${title.toLowerCase()}`}>
            <div className={styles.header}>
                <img src={imageURL} alt="Category dish"/>
                <Typography.Title>{title}</Typography.Title>
            </div>
            <Typography.Regular>{description}</Typography.Regular>
        </Link>
    );
};
