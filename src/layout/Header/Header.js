import styles from "./Header.module.sass";
import globalStyles from "styles/global.module.sass";
import { Link } from "react-router-dom";
import { BurgerMenu } from "UI/BurgerMenu/BurgerMenu";
import { useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useMediaQuery } from "hooks/useMediaQuery";
import HouseRecipe from "assets/house-recipe.svg";
import { Typography } from "typography/Typography";
import { TEXT } from "constants/text";
import { BREAKPOINTS } from "constants/breakpoints";
import cn from "classnames";

export const Header = ({ setIsSuggest, isSuggest }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.xs})`);

    const toggleMenuHandler = () => {
        setIsMenuOpened(prevState => !prevState);
    };


    return (
        <header className={cn(styles.header, globalStyles.header)}>
            <Link to={"/"} onClick={() => setIsMenuOpened(false)} >
                <img className={styles.logo} src={HouseRecipe} alt="House Recipe"/>
            </Link>

            { isMobile &&
                <BurgerMenu
                    setIsSuggest={setIsSuggest}
                    isSuggest={isSuggest}
                    isMenuOpened={isMenuOpened}
                    toggleMenuHandler={toggleMenuHandler} />}


            { !isMobile &&
                <>
                    <SearchBar
                        setIsSuggest={setIsSuggest}
                        isSuggest={isSuggest}
                        placeholder={TEXT.search}
                        className={styles.search} />

                    <div className={styles.nav}>
                        <Link to={"/categories"} className={styles.link}>
                            <Typography.Regular className={styles.categories}>{TEXT.categories}</Typography.Regular>
                        </Link>
                        <Link to={"/random"} className={cn(styles.btn, styles.link)} >
                            <Typography.Regular>{TEXT.randomRecipe}</Typography.Regular>
                        </Link>
                    </div>
                </>
            }
        </header>
    );
};
