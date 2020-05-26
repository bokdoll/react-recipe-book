import {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (callback, url) => {
    const [isLoading, setIsLoading] = useState(true);

    console.log("useFetch");

    const callUrl = async() => {
        const {data : {Grid_20150827000000000226_1: {row}}} = await axios.get(url);
        callback(row);
        setIsLoading(false);
    }

    useEffect(() => {
        callUrl();
    }, []);

    return isLoading;
}

export default useFetch;