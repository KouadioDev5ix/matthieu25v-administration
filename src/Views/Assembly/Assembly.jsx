import React, { useState } from "react";
import Africa from "../../Components/Africa/Africa";

export default function Assembly() {
  const [isActive, setIsActive] = useState({
    index: 0,
    tab: "Afrique",
  });

  const tabAction = [
    {
      index: 0,
      tab: "Afrique",
    },
    {
      index: 1,
      tab: "Europe",
    },
    {
      index: 2,
      tab: "Asie",
    },
    {
      index: 3,
      tab: "Amerique",
    },
    {
      index: 5,
      tab: "Oceanie",
    },
  ];

  return (
    <div className="p-2">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-900">
          Listes des assemblées dans le monde
        </h1>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 my-4 underline">
          Continents:
        </h2>
      </div>

      {/* LOGIQUE DE NAVIGATION ENTRE LES BUTTONS */}

      <div className="gap-1 w-fit p-1 flex items-center text-black justify-between rounded-md border text-md bg-white">
        {tabAction.map((item) => (
          <button
            onClick={() => {
              setIsActive(item);
            }}
            className={`text-sm px-4 w-fit py-1 rounded-md ${
              item.index === isActive.index
                ? "bg-blue-200 text-blue-600"
                : "text-black"
            }  `}
          >
            {item.tab}
          </button>
        ))}
      </div>

      {/* AFFICHAGE CONDITIONNELLES DES ASSEMBLEES */}

      <div className=" mx-auto flex items-center max-w-6xl"></div>

      <div>
        {isActive.tab === "Afrique" && (
          <div>
            <Africa />
          </div>
        )}
      </div>
    </div>
  );
}
