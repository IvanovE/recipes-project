import styles from './Error.module.sass';
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";

export const Error = () => {
    return (
        <Typography.Title className={styles.text}>{TEXT.error}</Typography.Title>
    );
};