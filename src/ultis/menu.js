import icons from "./icons";

const {
  MdOutlineLibraryMusic,
  LuDisc3,
  LuRadioTower,
  FaNewspaper,
  FaChartLine,
} = icons;

export const sidebarMenu = [
  {
    path: "mymusic",
    text: "Cá nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "",
    text: "Khám phá",
    end: true,
    icons: <LuDisc3 size={24} />,
  },
  {
    path: "zing-chart",
    text: "Zing chart",
    icons: <FaChartLine size={24} />,
  },
  {
    path: "Live",
    text: "Radio",
    icons: <LuRadioTower size={24} />,
  },
  {
    path: "following",
    text: "Theo dõi",
    icons: <FaNewspaper size={24} />,
  },
];
