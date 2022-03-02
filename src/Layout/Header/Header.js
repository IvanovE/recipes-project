import { NavLink } from "react-router-dom";
import HouseRecipe from "../../img/house-recipe.svg";
import styles from './Header.module.sass';
import { Typography } from '../../typography/Typography';
import { TEXT } from "../../constants/text";

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to={'/'}>
                <img className={styles.logo} src={HouseRecipe} alt="House Recipe"/>
            </NavLink>
            <ul className={styles.nav}>
                <li>
                    <NavLink to={'/categories'}>
                        <Typography.Regular className={styles.link}>{TEXT.categories}</Typography.Regular>
                    </NavLink>
                </li>
                <li className={styles.btn}>
                    <NavLink to={'#'}>
                        <Typography.Regular>{TEXT.randomRecipe}</Typography.Regular>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};
