import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import useFetch from "../../../Componants/hooks/useFetch";
import { fetchDataFromApi } from "../../../Componants/utils/api";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import MovieCard from "../movieCard/MovieCard";
import Spinner from "../spinner/Spinner";
import Header from "../Header";
import Footer from "../Footer";

let filters = {};

const sortbyData = [
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
  const [data, setData] = useState(null);
  const [filterdata, setfiltterData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();
  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };
  useEffect(() => {
    filters = {};
    setData(null);
    setfiltterData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.action == "clear") {
      setfiltterData(null);
      fetchInitialData();
    }
    if (action.name === "sortby") {
      setSortby(selectedItems);

      if (selectedItems.value == "vote_average.desc") {
        const sortedData = data.slice().sort((a, b) => b.vote_average - a.vote_average);
        setfiltterData(sortedData);
      } else if (selectedItems.value == "vote_average.asc") {
        const sortedData = data.slice().sort((a, b) => a.vote_average - b.vote_average);
        setfiltterData(sortedData);
      } else if (selectedItems.value === "primary_release_date.asc") {
        const sortedData = data.slice().sort((a, b) => {
          if (mediaType === "tv") {
            const dateA = new Date(a.first_air_date);
            const dateB = new Date(b.first_air_date);
            return dateA - dateB;
          } else {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            return dateA - dateB;
          }
        });
        setfiltterData(sortedData);
      } else if (selectedItems.value === "primary_release_date.desc") {
        const sortedData = data.slice().sort((a, b) => {
          if (mediaType === "tv") {
            const dateA = new Date(a.first_air_date);
            const dateB = new Date(b.first_air_date);
            return dateB - dateA;
          } else {
            const dateA = new Date(a.release_date);
            const dateB = new Date(b.release_date);
            return dateB - dateA;
          }
        });
        setfiltterData(sortedData);
      } else if (selectedItems.value === "original_title.asc") {
        const sortedData = data.slice().sort((a, b) => {
          if (mediaType === "tv") {
            return a.original_name.localeCompare(b.original_name);
          } else {
            return a.original_title.localeCompare(b.original_title);
          }
        });
        setfiltterData(sortedData);
      }

    }
    // console.log(data);

    if (action.name === "genres") {
      const updatedIds = selectedItems.map(item => item.id);
      const filteredData = data.filter(item =>
        updatedIds.every(id => item.genre_ids.includes(id))
      );
      setfiltterData(filteredData);
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  };
  const [searchQuery, setSearchQuery] = useState();
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    let filteredResult;
    if (mediaType === "tv") {
      filteredResult = data.filter(item =>
        item.original_name.toLowerCase().includes(query)
      );
    } else {
      filteredResult = data.filter(item =>
        item.original_title.toLowerCase().includes(query)
      );
    }
    setfiltterData(filteredResult);
  };
  

  return (
    <>
      <Header />
      <div className="explorePage">
        <ContentWrapper>
          <div className="pageHeader">
            <div className="pageTitle">
              {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"} <br />
            
            </div>
            <div className="filters">
              <Select
                isMulti
                name="genres"
                value={genre}
                closeMenuOnSelect={false}
                options={genresData}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}
                onChange={onChange}
                placeholder="Select genres"
                className="react-select-container genresDD"
                classNamePrefix="react-select"
              />
              <Select
                name="sortby"
                value={sortby}
                options={sortbyData}
                onChange={onChange}
                isClearable={true}
                placeholder="Sort by"
                className="react-select-container sortbyDD"
                classNamePrefix="react-select"
              />
                <input
                type="text"
                className="ttextt_search"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch} />
            </div>

          </div>
          {loading && <Spinner initial={true} />}
          {!loading && (
            <>
              {data?.length > 0 ? (
                <InfiniteScroll
                  className="content"
                  dataLength={data?.length || []}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {
                    filterdata
                      ? filterdata?.map((item, index) => {
                        if (item.media_type === 'person') return null;
                        return <MovieCard key={index} data={item} mediaType={mediaType} />;
                      })
                      : data?.map((item, index) => {
                        if (item.media_type === 'person') return null;
                        return <MovieCard key={index} data={item} mediaType={mediaType} />;
                      })
                  }

                </InfiniteScroll>
              ) : (
                <span className="resultNotFound">
                  Sorry, Results not found!
                </span>
              )}
            </>
          )}
        </ContentWrapper>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
