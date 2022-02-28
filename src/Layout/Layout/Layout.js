import styles from './Layout.module.sass';
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    );
};
