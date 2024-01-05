import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  NewspaperIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications, Berita } from "@/pages/dashboard";
import { SignIn, SignUp } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title: "dassboard pages",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <NewspaperIcon {...icon} />,
        name: "Berita",
        path: "/Berita",
        element: <Berita />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
];

export default routes;
