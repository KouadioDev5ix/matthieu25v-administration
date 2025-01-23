import React, { useState } from "react";

import France from "../../Assets/Images/francematerial__52340.jpg";
import England from "../../Assets/Images/england_Flag.jpg";
import Spain from "../../Assets/Images/spain_Flag.jpg";
import Portugal from "../../Assets/Images/Portugal_Flag.jpg";
import FrenchSermons from "../../Components/SermonsComponents/FrenchSermons/FrenchSermons";
import EnglishSermons from "../../Components/SermonsComponents/EnglishSermons/EnglishSermons";

export default function Sermons() {
  const [active, setActive] = useState({ index: 0, value: "France" });

  const flagData = [
    {
      id: 1,
      images: France,
      value: "France",
    },
    {
      id: 2,
      images: England,
      value: "Anglais",
    },
    {
      id: 3,
      images: Spain,
      value: "Espagne",
    },
    {
      id: 4,
      images: Portugal,
      value: "Portugal",
    },
  ];

  return (
    <div className="p-2">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-900">Prédications</h1>
      </div>
      <div className="flex items-center gap-2 mt-5 ">
        {flagData.map((item, index) => (
          <div
            onClick={() => {
              setActive({ index: index, value: item.value });
            }}
            key={index}
            className={`${
              active.index === index
                ? "border border-gray-300 px-3 py-2"
                : "px-3 py-2"
            }    `}
          >
            <img
              src={item.images}
              alt=""
              className="object-cover w-24 h-auto cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="mt-7">
        {active.value === "France" && <FrenchSermons />}
        {active.value === "Anglais" && <EnglishSermons />}
      </div>
    </div>
  );
}
