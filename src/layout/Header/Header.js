import { Link } from "react-router-dom";
import HouseRecipe from "../../assets/house-recipe.svg";
import styles from './Header.module.sass';
import globalStyles from '../../styles/global.module.sass';
import { Typography } from '../../typography/Typography';
import { TEXT } from "../../constants/text";
import cn from 'classnames';
import { BurgerMenu } from "../../UI/BurgerMenu/BurgerMenu";

// window.outerWidth < 576 - временная мера
export const Header = () => {
    return (
        <header className={cn(styles.header, globalStyles.header)}>
            <Link to={'/'}>
                <img className={styles.logo} src={HouseRecipe} alt="House Recipe"/>
            </Link>

            { window.outerWidth < 576 && <BurgerMenu />}


            { window.outerWidth > 576 &&
                <ul className={styles.nav}>
                    <li>
                        <Link to={'/categories'}>
                            <Typography.Regular className={styles.link}>{TEXT.categories}</Typography.Regular>
                        </Link>
                    </li>
                    <li className={styles.btn}>
                        <Link to={`#`}>
                            <Typography.Regular>{TEXT.randomRecipe}</Typography.Regular>
                        </Link>
                    </li>
                </ul>}

        </header>
    );
};
