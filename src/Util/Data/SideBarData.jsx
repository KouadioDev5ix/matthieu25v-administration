import {
  BookOpenText,
  Contact,
  House,
  Images,
  ListMusic,
  Plane,
  ScrollText,
  Users,
  UsersRound,
} from "lucide-react";

export const sideBarData = [
  // {
  //   id: 1,
  //   Description: "Dashboard",
  //   link: "/home",
  //   icon: <House strokeWidth={1} />,
  // },
  {
    id: 2,
    Description: "Utilisateurs",
    link: "/users",
    icon: <Users strokeWidth={1.5} />,
  },

  {
    id: 8,
    Description: "Contacts par pays",
    link: "/contacts",
    icon: <Contact strokeWidth={1.5} />,
  },
  // {
  //   id: 3,
  //   Description: "Assemblées",
  //   link: "/assemblies",
  //   icon: <UsersRound strokeWidth={1.5} />,
  // },
  {
    id: 4,
    Description: "Predications",
    link: "/sermons",
    icon: <BookOpenText strokeWidth={1.5} />,
  },
  {
    id: 5,
    Description: "Photos et vidéos",
    link: "/photos-videos",
    icon: <Images strokeWidth={1.5} />,
  },
  {
    id: 6,
    Description: "Programmes de voyages",
    link: "/travels",
    icon: <Plane strokeWidth={1.5} />,
  },
  {
    id: 7,
    Description: "Cantiques et Louanges",
    link: "/hymns",
    icon: <ListMusic strokeWidth={1.5} />,
  },

  {
    id: 9,
    Description: "Informations",
    link: "/informations",
    icon: <ScrollText strokeWidth={1.5} />,
  },
];
