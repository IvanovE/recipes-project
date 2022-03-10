import styles from "./Layout.module.sass";
import globalStyles from "../../styles/global.module.sass";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import cn from "classnames";
import { useState } from "react";

export const Layout = ({ children }) => {
    const [isSuggest, setIsSuggest] = useState(false);

    return (
        <div onClick={() => setIsSuggest(false)} className={styles.layout}>
            <Header setIsSuggest={setIsSuggest} isSuggest={isSuggest} />
            <div className={cn(styles.container, globalStyles.container)}>
                {children}
            </div>
            <Footer />
        </div>
    );
};
