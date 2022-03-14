import styles from "./BurgerMenu.module.sass";
import { Link } from "react-router-dom";
import { Typography } from "typography/Typography";
import { TEXT } from "constants/text";
import cn from "classnames";
import { SearchBar } from "components/SearchBar/SearchBar";

export const BurgerMenu = ({ setIsSuggest, isSuggest, isMenuOpened, toggleMenuHandler }) => {

    return (
        <>
            <div className={cn({
                [styles.container]: true,
                [styles.open]: isMenuOpened
            })} onClick={toggleMenuHandler}>
                <div className={styles.menu} />
            </div>

            <nav onClick={() => setIsSuggest(false)} className={styles.nav}>
                <SearchBar
                    className={styles.search}
                    toggleMenuHandler={toggleMenuHandler}
                    setIsSuggest={setIsSuggest}
                    isSuggest={isSuggest}
                    placeholder={TEXT.search} />

                <Link to={"/categories"} onClick={toggleMenuHandler}>
                    <Typography.Title>{TEXT.categories}</Typography.Title>
                </Link>
                <Link to={"/random"} onClick={toggleMenuHandler}>
                    <Typography.Title>{TEXT.randomRecipe}</Typography.Title>
                </Link>
            </nav>
        </>

    );
};
