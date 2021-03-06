import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifts";

export const useFetchGifts = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                //setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    })
                //}, 3000);
            });
    }, []);

    return state;
};