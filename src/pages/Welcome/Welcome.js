import styles from './Welcome.module.sass';
import cooking1 from '../../img/cooking2.gif';
import cooking2 from '../../img/cooking3.gif';
import cooking3 from '../../img/cooking1.gif';
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";

export const Welcome = () => {
    return (
        <div>
            <div className={styles.img}>
                <Typography.Title className={styles.title}>{TEXT.welcomeTitle}</Typography.Title>
            </div>
            <div className={styles.section}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection1}</Typography.Subtitle>
                <img src={cooking1} alt="Cooking"/>
            </div>
            <div className={`${styles.section} ${styles.reversed}`}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection2}</Typography.Subtitle>
                <img src={cooking2} alt="Cooking"/>
            </div>
            <div className={styles.section}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection3}</Typography.Subtitle>
                <img src={cooking3} alt="Cooking"/>
            </div>
        </div>
    );
};
