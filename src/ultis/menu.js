import icons from "./icons";

const { MdOutlineLibraryMusic } = icons;
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
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "zing-chart",
    text: "Zing chart",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "following",
    text: "Theo dõi",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
];
