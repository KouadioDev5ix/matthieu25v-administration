import React, { useState } from "react";
import SouthAfrica from "../AfricaCountries/SouthAfrica/SouthAfrica";
import Cameroon from "../AfricaCountries/Cameroon/Cameroon";

export default function Africa() {
  const [active, setActive] = useState({ index: 0, value: "AFRIQUE DU SUD" });

  const countrytab = [
    {
      label: "Afrique du Sud",
      link: "#",
      value: "AFRIQUE DU SUD",
    },

    {
      label: "Cameroun",
      link: "#",
      value: "CAMEROUN",
    },
    {
      label: " Algérie",
      link: "#",
      value: "ALGERIE",
    },

    {
      label: "Nigeria",
      link: "#",
      value: "NIGERIA",
    },
    {
      label: "Kenya",
      link: "#",
      value: "KENYA",
    },

    {
      label: "Ghana",
      link: "#",
      value: "GHANA",
    },
    {
      label: "Côte d'Ivoire",
      link: "#",
      value: "CI",
    },

    {
      label: "Burkina Faso",
      link: "#",
      value: "BURKINA FASO",
    },
    {
      label: "LIberia",
      link: "#",
      value: "LIBERIA",
    },
    {
      label: "Zimbabwe",
      link: "#",
      value: "ZIMBABWE",
    },
  ];
  return (
    <div>
      <div className="mb-3 mx-auto my-auto flex items-center max-w-xl"></div>

      <div
        className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-2 
      lg:grid-cols-[200px_1fr]"
      >
        <div className="mt-2 grid cursor-pointer text-sm border-r px-1 h-full">
          <div>
            <h1 className="text-2xl my-3 font-extrabold leading-tight tracking-tight">
              Pays
            </h1>
          </div>
          {countrytab.map((item, index) => (
            <span
              onClick={() => {
                setActive({ index: index, value: item.value });
              }}
              key={index}
              className={`${
                active.index === index
                  ? "bg-gray-200 font-bold px-3 py-2 rounded-lg text-primary"
                  : "px-3 py-2 text-slate-900"
              }  `}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div>
          {active.value === "AFRIQUE DU SUD" && (
            <div>
              <SouthAfrica />
            </div>
          )}

          {active.value === "CAMEROUN" && (
            <div>
              <Cameroon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
