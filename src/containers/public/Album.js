import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as apis from "../../apis";
import moment from "moment";

const Album = () => {
  const { title, pid } = useParams();
  const [playlistData, setPlaylistData] = useState({});
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const response = await apis.apiGetDetailPlaylist(pid);
      if (response.data.err === 0) {
        setPlaylistData(response.data.data);
      }
    };
    fetchDetailPlaylist();
  }, [pid]);
  return (
    <div className="flex gap-8 px-[59px]">
      <div className="flex-none w-[25%] border border-red-500 flex flex-col">
        <img
          src={playlistData.thumbnailM}
          alt="thumbnail"
          className="w-full object-contain rounded-md shadow-md"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-[20px] font-bold text-gray-800">
            {playlistData.tittle}
          </h3>
          <span className="flex gap-2 items-center text-gray-500 text">
            <span>Cap Nhat:</span>
            <span>
              {moment
                .unix(playlistData?.contentLastUpdate)
                .format("DD/MM/YYYY")}
            </span>
          </span>
          <span>{playlistData.artistNames}</span>
          <span>{`${Math.round(
            playlistData.like / 1000
          )}K nguoi yeu thich`}</span>
        </div>
      </div>
      <div className="flex-auto border border-green-500"></div>
    </div>
  );
};

export default Album;
