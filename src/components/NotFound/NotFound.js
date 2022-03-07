import styles from './NotFound.module.sass';
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";

export const NotFound = () => {
    return (
        <div className={styles.text}>
            <Typography.Title>{TEXT[404]}</Typography.Title>
            <Typography.Title>{TEXT.notFound}</Typography.Title>
        </div>
    );
};
