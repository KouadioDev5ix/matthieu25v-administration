import { createHashRouter, Navigate } from "react-router-dom";
import LoginPages from "../Views/LoginPage/LoginPages";
import Users from "../Views/AppUsers/Users";
import Assembly from "../Views/Assembly/Assembly";
import BaseLayout from "../Layout/BaseLayout";
import Sermons from "../Views/Sermons/Sermons";
import PhotoAndVideos from "../Views/PhotosAndVideos/PhotoAndVideos";
import Travels from "../Views/Travels/Travels";
import HymnsAndPraise from "../Views/HymnsAndPraise/HymnsAndPraise";
import Informations from "../Views/Informations/Informations";

export const Approuter = createHashRouter([
  // {
  //   path: "/login",
  //   element: <LoginPages />,
  // },

  {
    index: true,
    element: <LoginPages />,
  },
  {
    path: "/",
    element: <BaseLayout />,

    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/contacts",
        element: <Assembly />,
      },
      {
        path: "/sermons",
        element: <Sermons />,
      },

      {
        path: "/photos-videos",
        element: <PhotoAndVideos />,
      },

      {
        path: "/travels",
        element: <Travels />,
      },

      {
        path: "/hymns",
        element: <HymnsAndPraise />,
      },
      {
        path: "/informations",
        element: <Informations />,
      },
    ],
  },
]);
