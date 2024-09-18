import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const { AiOutlineHeart, AiFillHeart, BsThreeDots } = icons;
const Player = () => {
  const { curSongId } = useSelector((state) => state.music);
  const [infoSong, setInfoSong] = useState(null);
  useEffect(() => {
    const fetchDetailSong = async () => {
      const response = await apis.getDetailSong(curSongId);
      console.log(response);
    };
    fetchDetailSong();
  }, [curSongId]);
  console.log(curSongId);
  return (
    <div className="bg-main-400 px-5 h-full flex">
      <div className="w-[30%] flex-auto flex gap-3 items-center">
        <div className="flex flex-col gap-8">
          <span className="font-semibold text-gray-700 text-sm">
            {infoSong?.title}
          </span>
          <span className="text-xs text-gray-500">{infoSong?.artistNames}</span>
        </div>
        <div className="flex gap-4 pl-2">
          <span>
            <AiOutlineHeart size={16} />
          </span>
          <span>
            <BsThreeDots size={16} />
          </span>
        </div>
        <img
          src={infoSong?.thumbnail}
          alt="thumnail"
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>
      <div className="w-[40%] flex-auto">2</div>
      <div className="w-[30%] flex-auto">3</div>
    </div>
  );
};

export default Player;
