import styles from './Separator.module.sass';
import { Typography } from "../../../typography/Typography";
import { TEXT } from "../../../constants/text";

export const Separator = () => {
    return (
        <Typography.Regular className={styles.separator}>
            {TEXT.breadcrumbsSeparator}
        </Typography.Regular>
    );
};
