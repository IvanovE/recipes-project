import styles from "./Footer.module.sass";
import { Typography } from "typography/Typography";
import { TEXT } from "constants/text";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography.Small>{TEXT.footerTitle}</Typography.Small>
        </footer>
    );
};
