import styles from "./SearchBar.module.sass";
import { useCallback, useState } from "react";
import { URLS } from "../../api/urls";
import { Typography } from "../../typography/Typography";
import debounce from "lodash/debounce";
import { Link } from "react-router-dom";
import cn from "classnames";

export const SearchBar = ({ toggleMenuHandler = null, setIsSuggest, isSuggest, placeholder, className }) => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);

    const fetchSuggestItems = async (query) => {
        const response = await fetch(URLS.Search(query));
        const data = await response.json();
        setData(data.meals);
    };

    const debouncedFetchSuggestItems = useCallback(debounce(fetchSuggestItems, 400, {}), []);

    const onInput = (event) => {
        const { value } = event.target;
        if (value.trim() === "") {
            setInput(value);
            setData([]);
            setIsSuggest(false);
            return;
        }
        setIsSuggest(true);
        setInput(value);
        debouncedFetchSuggestItems(value);
    };

    const clear = () => {
        setInput("");
        toggleMenuHandler?.();
    };

    const showSuggest = (event) => {
        event.stopPropagation();
        if (input.trim() !== "") {
            debouncedFetchSuggestItems(input);
            setIsSuggest(true);
        }
    };


    return (
        <div className={cn(styles.search, className)}>
            <input type="text"
                value={input}
                className={styles.input}
                placeholder={placeholder}
                onInput={onInput}
                onClick={showSuggest} />

            <div className={styles.suggestions}>
                { data && isSuggest &&
                    data.map(el => {
                        return (
                            <Link onClick={clear} to={`/categories/${el.strCategory}/${el.idMeal}`} key={el.idMeal}>
                                <div className={styles.card}>
                                    <img src={el.strMealThumb} alt="" />
                                    <Typography.Subtitle>{el.strMeal}</Typography.Subtitle>
                                </div>
                            </Link>
                        );
                    })
                }

                {
                    !data && isSuggest && <Typography.Title className={styles.text}>Nothing Found!</Typography.Title>
                }
            </div>
        </div>
    );
};
