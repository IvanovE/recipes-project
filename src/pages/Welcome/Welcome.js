import styles from './Welcome.module.sass';
import globalStyles from '../../styles/global.module.sass';
import cooking1 from '../../assets/cooking2.gif';
import cooking2 from '../../assets/cooking3.gif';
import cooking3 from '../../assets/cooking1.gif';
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";
import cn from 'classnames';

export const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Typography.Title className={styles.title}>{TEXT.welcomeTitle}</Typography.Title>
            </div>
            <div className={cn(styles.section, globalStyles.container)}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection1}</Typography.Subtitle>
                <img src={cooking1} alt="Cooking"/>
            </div>
            <div className={cn(styles.section, styles.reversed, globalStyles.container)}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection2}</Typography.Subtitle>
                <img src={cooking2} alt="Cooking"/>
            </div>
            <div className={cn(styles.section, globalStyles.container)}>
                <Typography.Subtitle className={styles.text}>{TEXT.welcomeSection3}</Typography.Subtitle>
                <img src={cooking3} alt="Cooking"/>
            </div>
        </div>
    );
};
