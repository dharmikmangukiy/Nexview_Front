import React from "react";
import Carousel from "../../../Componants/carousel/Carousel";
import useFetch from "../../../Componants/hooks/useFetch";
import useFetch2 from "../../../Componants/hooks/useFetch2";



const Recommendation = ({ mediaType, id }) => {
    const { data1, loading, error } = useFetch2(
        `/${mediaType}/${id}/recommendations`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data1?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;
