import { useEffect, useState } from "react";
import { fetchDataFromApi2 } from "../utils/api2";

const useFetch2 = (url) => {
    const [data1, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi2(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data1, loading, error };
};

export default useFetch2;
