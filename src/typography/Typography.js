import cn from 'classnames';
import styles from './Typography.module.sass';

export const Typography = {
    Title: ({
        children, className
    }) => <div className={cn(styles.title, className)}>{children}</div>,

    Subtitle: ({
        children, className
    }) => <div className={cn(styles.subtitle, className)}>{children}</div>,

    Regular: ({
        children, className
    }) => <div className={cn(styles.regular, className)}>{children}</div>,

    Small: ({
        children, className
    }) => <div className={cn(styles.small, className)}>{children}</div>
};
