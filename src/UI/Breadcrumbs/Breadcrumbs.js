import styles from './Breadcrumbs.module.sass';
import { Link } from "react-router-dom";
import { Typography } from "../../typography/Typography";
import cn from 'classnames';
import { Separator } from "./components/Separator";

export const Breadcrumbs = ({ breadcrumbArr, className }) => {
    const isLast = i => i === breadcrumbArr.length - 1 && breadcrumbArr.length > 1;
    const isOnly = i => i === 0 && breadcrumbArr.length === 1;
    const isFirst = i => i === 0 && breadcrumbArr.length > 1;

    return (
        <nav className={cn(styles.nav, className)}>
            <ul className={styles.breadcrumbs}>
                {breadcrumbArr.map((item, index) => {
                    if (isLast(index)) {
                        return (
                            <li key={item.url}>
                                <Separator />
                                <Typography.Regular className={styles.nonactive}>
                                    {item.title}
                                </Typography.Regular>
                            </li>
                        );
                    }

                    if (isFirst(index)) {
                        return (
                            <li key={item.url}>
                                <Link to={item.url}>
                                    <Typography.Regular className={styles.active}>
                                        {item.title}
                                    </Typography.Regular>
                                </Link>
                            </li>
                        );
                    }

                    if (isOnly(index)) {
                        return (
                            <li key={item.url}>
                                <Typography.Regular className={styles.nonactive}>
                                    {item.title}
                                </Typography.Regular>
                            </li>
                        );
                    }

                    return (
                        <li key={item.title}>
                            <Separator />
                            <Link to={item.url}>
                                <Typography.Regular className={styles.active}>
                                    {item.title}
                                </Typography.Regular>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
