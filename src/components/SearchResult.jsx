import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { context } from "../context/context";
import LeftNav from './LeftNav'
import SearchResultVideo from "./SearchResultVideo.jsx";

function SearchResult() {
  const [searchResult, setSearchResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResult();
  }, []);

  const fetchSearchResult = () => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
      console.log("Search result data :: ", res);
      setSearchResult(res?.contents);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 gap-2 p-5">
          {searchResult?.map((item) => {
            if (item?.type !== "video") return false;
            let video = item.video;
            return <SearchResultVideo key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
