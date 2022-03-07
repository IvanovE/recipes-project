import styles from './BurgerMenu.module.sass';
import { Link } from "react-router-dom";
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";
import { useState } from "react";
import cn from 'classnames';

export const BurgerMenu = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenuHandler = () => {
        setIsOpened((prevState) => !prevState);
    };

    return (
        <>
            <div className={cn({
                [styles.container]: true,
                [styles.open]: isOpened
            })} onClick={toggleMenuHandler}>
                <div className={styles.menu} />
            </div>
            <nav className={styles.nav}>
                <Link to={'/categories'} onClick={toggleMenuHandler}>
                    <Typography.Title>{TEXT.categories}</Typography.Title>
                </Link>
                <Link to={'#'} onClick={toggleMenuHandler}>
                    <Typography.Title>{TEXT.randomRecipe}</Typography.Title>
                </Link>
            </nav>
        </>

    );
};
