import React from "react";
import icons from "../ultis/icons";

const { FiSearch } = icons;

const Search = () => {
  return (
    <div className="w-full flex items-center ">
      <span className="h-10 p-4 bg-[#DDE4E4] flex items-center justify-center rounded-l-[20px] text-gray-500">
        <FiSearch size={24} />
      </span>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        className="outline-none bg-[#DDE4E4] px-4 py-2 w-full rounded-r-[20px] h-10 text-gray-500"
      />
    </div>
  );
};

export default Search;
