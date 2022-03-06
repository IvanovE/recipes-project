import styles from './BurgerMenu.module.sass';
import { Link } from "react-router-dom";
import { Typography } from "../../typography/Typography";
import { TEXT } from "../../constants/text";
import { useCallback, useState } from "react";
import cn from 'classnames';

export const BurgerMenu = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleHandler = useCallback(() => {
        setIsOpened((prevState) => !prevState);
    }, []);

    return (
        <>
            <div className={cn({
                [styles.container]: true,
                [styles.open]: isOpened
            })} onClick={toggleHandler}>
                <div className={styles.menu} />
                <nav className={styles.nav}>
                    <Link to={'/categories'}>
                        <Typography.Title>{TEXT.categories}</Typography.Title>
                    </Link>
                    <Link to={'#'}>
                        <Typography.Title>{TEXT.randomRecipe}</Typography.Title>
                    </Link>
                </nav>
            </div>

        </>

    );
};
