import { useCallback, useEffect, useState } from "react";
import { useEventListener } from "./useEventListener";

export const useMediaQuery = (mediaQuery) => {
    const [isMatch, setIsMatch] = useState(false);
    const [mediaQueryList, setMediaQueryList] = useState(undefined);

    useEffect(() => {
        const list = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    const setMedia = useCallback(e => setIsMatch(e.matches), []);

    useEventListener("change", setMedia, mediaQueryList);

    return isMatch;
};
