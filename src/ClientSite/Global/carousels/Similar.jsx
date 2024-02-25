import React from "react";
import Carousel from "../../../Componants/carousel/Carousel";
import useFetch from "../../../Componants/hooks/useFetch";
import useFetch2 from "../../../Componants/hooks/useFetch2";


const Similar = ({ mediaType, id }) => {
    const { data1, loading, error } = useFetch2(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data1?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;
