import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";

const {
  AiOutlineHeart,
  // AiFillHeart,
  BsThreeDots,
  MdSkipNext,
  MdSkipPrevious,
  CiRepeat,
  BsFillPlayFill,
  BsPauseFill,
  CiShuffle,
} = icons;
const Player = () => {
  const audioEl = new Audio(
    "https://a128-z3.zmdcdn.me/f053817b88bac84042114b1c7cafc5c9?authen=exp=1726836965~acl=/f053817b88bac84042114b1c7cafc5c9/*~hmac=fc6133a61feb8ed42cf27217374b4dd8"
  );
  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [infoSong, setInfoSong] = useState(null);
  const [source, setSource] = useState(null);
  //  const [isPlaying, setIsPlaying] = useState(false);
  console.log(audioEl);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(curSongId),
        apis.getSong(curSongId),
      ]);
      if (res1.data.err === 0) {
        setInfoSong(res1.data.data);
      }
      if (res2.data.err === 0) {
        setSource(res2.data.data["128"]);
      }
    };
    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    audioEl.play();
  }, [isPlaying]);

  const handleTogglePlayMusic = () => {};
  return (
    <div className="flex h-full px-5 bg-main-400">
      <div className="w-[30%] flex-auto flex gap-3 items-center">
        <div className="flex flex-col gap-8">
          <span className="text-sm font-semibold text-gray-700">
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
          className="object-cover w-16 h-16 rounded-md"
        />
      </div>
      <div className="w-[40%] flex items-center justify-center flex-col flex-auto gap-2 py-2">
        <div className="flex items-center justify-center gap-8 ">
          <span title="shuffle" className="cursor-pointer">
            <CiShuffle size={24} />
          </span>
          <span title="previous" className="cursor-pointer">
            <MdSkipPrevious size={24} />
          </span>
          <span
            className="p-1 border border-gray-700 rounded-full cursor-pointer hover:text-main-500"
            onClick={handleTogglePlayMusic}
          >
            {isPlaying ? (
              <BsPauseFill size={30} />
            ) : (
              <BsFillPlayFill size={30} />
            )}
          </span>

          <span className="cursor-pointer">
            <MdSkipNext size={24} />
          </span>
          <span title="repeat" className="cursor-pointer">
            <CiRepeat size={24} />
          </span>
        </div>
        <div>pg bar</div>
      </div>
      <div className="w-[30%] flex-auto">3</div>
    </div>
  );
};

export default Player;
