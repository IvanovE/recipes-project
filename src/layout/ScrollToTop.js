import { useEffect } from "react";
import { withRouter } from "react-router-dom";

export const ScrollToTop = withRouter(({ history, children }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return <>{children}</>;
});
