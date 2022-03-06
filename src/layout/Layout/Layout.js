import styles from './Layout.module.sass';
import globalStyles from '../../styles/global.module.sass';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import cn from 'classnames';

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={cn(styles.container, globalStyles.container)}>
                {children}
            </div>
            <Footer />
        </div>
    );
};
