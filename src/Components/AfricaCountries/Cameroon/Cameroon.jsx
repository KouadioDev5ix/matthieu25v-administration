import { Pagination } from "@mui/material";
import { Coins, House } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

export default function Cameroon() {
  const [areaData, setAreaData] = useState([
    {
      id: 1,
      tilte: "assemblée de Bafoussam ",
      pastorName: "Rodrigue FOTIE",
      constact: "+237 67 89 90 09 ",
      locatedAt: "Ancien ecole lorem ipsum ",
    },

    {
      id: 2,
      tilte: "Assemblée de Lomié",
      pastorName: "Leonel Fabrice",
      constact: "+237 79 59 90 80",
      locatedAt: "Lorem ipsum dolor si ",
    },
    {
      id: 3,
      tilte: "Assemblée de Bankin",
      pastorName: "Austin Maregere",
      constact: "+237 01 59 90 80",
      locatedAt: "Dolor siu upeiu lorem",
    },

    {
      id: 4,
      tilte: "Assemblée de Lomié",
      pastorName: "Leonel Fabrice",
      constact: "+237 79 59 90 80",
      locatedAt: "Lorem ipsum dolor si ",
    },

    {
      id: 5,
      tilte: "assemblée de Bafoussam ",
      pastorName: "Rodrigue FOTIE",
      constact: "+237 67 89 90 09 ",
      locatedAt: "Ancien ecole lorem ipsum ",
    },

    {
      id: 6,
      tilte: "Assemblée de Dshang",
      pastorName: "Austin Maregere",
      constact: "+237 01 59 90 80",
      locatedAt: "Dolor siu upeiu lorem",
    },
  ]);
  const [addAssemblyLoading, setAddAssemblyLoading] = useState(false);
  const [actionToPerform, setActionToPerform] = useState(false);

  ////////////ADD ASSEMBLY ::::::::::::::::::::

  const openModalToAddAssembly = () => {
    document.getElementById("addAsembly").showModal();
  };

  const handleAddAssembly = () => {
    setAddAssemblyLoading(true);
    setTimeout(() => {
      setAddAssemblyLoading(false);
      document.getElementById("addAsembly").close();
      toast.success("Aseemblée ajoutée avec succès");
    }, 1000);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Cameroun</h1>
        <button
          className=" bg-gray-200 border font-semibold text-black text-xs px-2 h-10 rounded-md"
          onClick={() => openModalToAddAssembly()}
        >
          Ajouter une assemblée
        </button>
      </div>
      {/* SEARCH SECTIONS */}
      <div className="flex gap-2 mt-5">
        <input
          type="text"
          placeholder="Recherhcer une assemblée..."
          className="input input-bordered input-md w-full max-w-xs"
        />

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Filtrer par ville
          </option>
          <option>Yahoude</option>
          <option>Dshang</option>
        </select>
        <button className="text-black h-12 px-4 font-semibold bg-gray-200 rounded-md text-xs">
          Rechercher
        </button>
      </div>
      {/* LISTES DES ASSEMBLEES */}
      {/* md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 */}
      <div className="grid my-3 gap-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-full">
        {areaData.map((data) => (
          <div
            className="relative bg-white w-full rounded-md py-2 border border-gray-200"
            key={data.id}
          >
            <div className="dropdown dropdown-end absolute right-2 top-2">
              <div
                tabIndex={0}
                role="button"
                className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-200"
              >
                ...
              </div>
              <ul
                tabIndex={0}
                className="mt-1 dropdown-content z-[1] menu p-2 border shadow bg-base-100 rounded-lg w-44"
              >
                <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold h-9 w-full flex items-center justify-start rounded-lg px-3">
                  Modifier
                </button>

                <button
                  // onClick={() => {
                  //   document.getElementById("deleteMonnaieEqui").showModal();
                  // }}
                  className="bg-white hover:bg-red-600 text-black hover:text-white font-semibold h-9 w-full flex items-center justify-start rounded-lg px-3"
                >
                  Supprimer
                </button>
              </ul>
            </div>
            <div className="flex justify-between px-2 space-x-1 text-sm items-start w-full">
              <div className="h-8 bg-lime-100 rounded-full flex items-center justify-center ">
                <House className="w-10 h-10" />
              </div>

              <div className="w-full">
                <h1 className="text-black font-bold text-xs">{data.tilte}</h1>

                <div className="flex items-center gap-2">
                  <p className="text-black font-normal text-xs">Pasteur:</p>

                  <span className="text-orange-600 text-xs">
                    {data.pastorName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-black font-normal text-xs">Contact:</p>

                  <span className="text-orange-600 text-xs">
                    {data.constact}{" "}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-600">
                    {data.locatedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog id="addAsembly" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* INPUT SECTIONS */}
          <div>
            <h1 className="text-gray-700 text-xl font-bold mb-4">
              {actionToPerform
                ? "Modifier les infos de l'assemblée"
                : " Ajouter une assemblée"}
            </h1>
            <hr />

            <div className="w-full">
              <label className="form-control w-full max-w-full">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Description
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: Pretoria"
                  className="input input-bordered w-full max-w-full"
                />
              </label>
            </div>

            <div className="flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Nom du pasteur{" "}
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: Johnson"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Numéros de téléphone
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: +27 07 09 00 00 05"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>

            <label className="form-control">
              <div className="label">
                <span className="text-sm text-gray-600 font-semibold">
                  Situation géographique
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Ex: Donner une decription breve du lieu du culte"
              ></textarea>
            </label>
          </div>

          <div className="w-full flex items-center gap-x-4 mt-4">
            <button
              className="w-full h-12 bg-blue-200 font-bold flex items-center justify-center rounded-md"
              onClick={() => handleAddAssembly()}
              disabled={addAssemblyLoading}
            >
              {addAssemblyLoading ? (
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  textAlign="center"
                  color="black"
                  strokeColor="black"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=" "
                />
              ) : (
                "Enregister"
              )}
            </button>
            <button
              className="w-full h-12 bg-gray-200 font-bold flex items-center justify-center rounded-md text-black"
              onClick={() => document.getElementById("addAsembly").close()}
              disabled={addAssemblyLoading}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>

      <div className="flex justify-end mt-9">
        <Pagination />
      </div>
    </div>
  );
}
