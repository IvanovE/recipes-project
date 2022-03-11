import { useEffect } from "react";

export const useEventListener = (
    eventType,
    callback,
    element = window
) => {
    useEffect(() => {
        const handler = e => callback(e);
        element.addEventListener(eventType, handler);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element, callback]);
};
