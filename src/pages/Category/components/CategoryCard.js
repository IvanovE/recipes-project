import styles from "./CategoryCard.module.sass";
import { Typography } from "../../../typography/Typography";
import { Link } from "react-router-dom";


export const CategoryCard = ({ id, category, title, imageURL }) => {
    return (
        <Link className={styles.card} to={`/categories/${category}/${id}`}>
            <img src={imageURL} alt="" />
            <Typography.Title>{title}</Typography.Title>
        </Link>
    );
};
