import { CircularProgress, Drawer, Pagination, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pencil from "../../../Assets/Icons/pen-2-svgrepo-com (2).svg";
import toast from "react-hot-toast";
import Trash from "../../../Assets/Icons/trash-bin-minimalistic-2-svgrepo-com.svg";
import { RotatingLines } from "react-loader-spinner";

export default function FrenchSermons() {
  const [SermonsData, setSermonsData] = useState([
    {
      id: 1,
      title: "Kacou 1 : C 'est ici la voix de Matthieu25:6",
      detail: "Préché le 08 Juillet 2002...",
      description: `1- Comme les prophete de la bible en Avril 1993 moi Kacou Philippe un homme qui n'avais... `,
    },
    {
      id: 2,
      title: "Kacou 2 : Prononce le jugement",
      detail:
        "Prêché le dimanche 18 août 2002 à Locodjro, Abidjan – Côte d’Ivoire",
      description:
        "1- Je tire mon texte ce matin de, Apocalypse 14 :6 à 10. Je fais la lecture : « Et je vis un [autre] ange volant par le milieu du Ciel, ayant l'Évangile éternel pour l'annoncer à ceux qui sont établis sur la terre,...",
    },
    {
      id: 3,
      title: "Kacou 3 : Un prophète envoyé de Dieu",
      detail:
        "Prêché le dimanche 20 octobre 2002, à Locodjro, Abidjan – Côte d’Ivoire",
      description:
        "1- L’Évangile du Royaume des Cieux vient toujours du Ciel à travers un ange tandis qu’il y a un autre évangile qui vient de l’abîme à travers l’école pastorale car Dieu remplit le cœur tandis que le diable...",
    },
    {
      id: 4,
      title: "Kacou 4 : Les sept âges de l’Église et les sept sceaux",
      detail:
        "Prêché le dimanche 10 novembre 2002 à Locodjro, Abidjan – Côte d’Ivoire",
      description:
        "1- Depuis l'effusion du Saint-Esprit dans Actes 2 jusqu'à l'enlèvement, l'Église des nations est divisée en sept périodes ou âges. C’est-à-dire qu’à telle période, l'Église des nations...",
    },
    {
      id: 5,
      title: "Kacou 5 : L'accomplissement de Matthieu 25 :6",
      detail:
        "Prêché le dimanche matin 15 décembre 2002 à Locodjro, Abidjan–Côte d’Ivoire",
      description:
        "1- On ne doit pas commettre les mêmes erreurs que les Juifs ont commises contre les prophètes et contre le Seigneur Jésus-Christ...",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [selectedSemon, setSelectedSemon] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [updateSermonLoading, setUpdateSermonLoading] = useState(false);
  const [deleteSermonsLoading, setDeleleSermonsLoading] = useState(false);

  //DELETE SERMONS SECTIIONS ::::::::::::::::::::::::::::::::::
  const OpenDeleteSermonsModal = () => {
    document.getElementById("deleteSermons").showModal();
  };
  const handleDeleteSermons = () => {
    setDeleleSermonsLoading(true);
    setTimeout(() => {
      setDeleleSermonsLoading(false);
      document.getElementById("deleteSermons").close();
      toast.success("Prédications supprimée avec succès");
    }, 1000);
  };

  /**
   * Get sermons list from API
   */

  const getSermonsListes = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getSermonsListes();
  }, []);

  const wantToEditSermons = (sermon) => {
    setOpenDrawer(true);
    setSelectedSemon(sermon);
  };

  /**
   * UPDATE SERMONS
   */

  const handleUpdateSermons = () => {
    setUpdateSermonLoading(true);
    setTimeout(() => {
      setUpdateSermonLoading(false);
      setOpenDrawer(false);
      toast.success("Mise à jour effectuée avec succès");
    }, 1000);
  };

  const TableElement = ({ item }) => {
    return (
      <tr key={item.id}>
        <td className="text-xs text-gray-900">{item.title}</td>
        <td className="w-72 text-xs text-gray-900 whitespace-normal break-words">
          {item.detail}
        </td>
        <td className="w-72 text-xs text-gray-900 whitespace-normal break-words">
          {item.description}
        </td>

        <td className="flex items-center gap-2">
          <Tooltip title="Mettre à jour">
            <button onClick={() => wantToEditSermons(item)}>
              <img src={Pencil} alt="" className="w-5 h-5" />
            </button>
          </Tooltip>

          <Tooltip title="Supprimer">
            <button onClick={() => OpenDeleteSermonsModal()}>
              <img src={Trash} alt="" className="w-5 h-5" />
            </button>
          </Tooltip>
        </td>
      </tr>
    );
  };

  return (
    <div className="mt-5">
      {/* TABLE SECTIONS */}

      <div className="mt-7">
        <div className="overflow-x-auto rounded-md border shadow">
          <table className="table">
            <thead className="bg-gray-200 text-black font-semibold text-md">
              <tr>
                <th>Titre</th>
                <th>Detail</th>

                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-md">
              {loading ? (
                <tr>
                  <th colSpan={6}>
                    <div className="my-7 flex items-center justify-center">
                      <CircularProgress color="inherit" />
                    </div>
                  </th>
                </tr>
              ) : null}

              {!loading && SermonsData.length !== 0
                ? SermonsData.map((user) => (
                    <TableElement key={user.id} item={user} />
                  ))
                : null}

              {!loading && SermonsData.length === 0 ? (
                <tr>
                  <th colSpan={6}>
                    <div className="my-10 flex items-center justify-center ">
                      <p className="text-gray-900 text-lg text-center">
                        Aucune prédications trouvées!
                      </p>
                    </div>
                  </th>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-5">
          <Pagination />
        </div>
      </div>

      {/* DRAWER */}

      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-[520px] h-full relative p-2 overflow-x-hidden">
          <div className="">
            <h1 className="text-gray-800 font-bold">MISE A JOUR DE :</h1>
            <span className="text-orange-600 font-bold">
              [{selectedSemon ? selectedSemon.title : ""}]
            </span>

            <div>
              <label className="form-control w-full max-w-full">
                <div className="label">
                  <span className="text-sm text-gray-600 font-bold">Titre</span>
                </div>
                <input
                  value={selectedSemon ? selectedSemon.title : ""}
                  type="text"
                  className="input input-bordered w-full max-w-full"
                />
              </label>
              <label className="form-control">
                <div className="label">
                  <span className="label-text text-gray-600 font-bold text-sm">
                    Descriptions
                  </span>
                </div>
                <textarea className="textarea textarea-bordered h-[400px] w-full">
                  {selectedSemon ? selectedSemon.description : ""}
                </textarea>
              </label>
            </div>

            {/* BUTTONS */}

            <div className="w-full absolute bottom-2 flex items-center gap-x-2 mx-auto">
              <button
                className="w-full h-12 bg-blue-200 font-bold flex items-center justify-center rounded-md"
                onClick={() => handleUpdateSermons()}
                disabled={updateSermonLoading}
              >
                {updateSermonLoading ? (
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
                    wrapperClass="
                                              "
                  />
                ) : (
                  "Valider"
                )}
              </button>
              <button
                className="w-full h-12 bg-gray-200 font-bold flex items-center justify-center rounded-md text-black"
                onClick={() => setOpenDrawer(false)}
                disabled={updateSermonLoading}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      </Drawer>

      {/* DELETE USER MODAL  */}

      <dialog id="deleteSermons" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* INPUT SECTIONS */}
          <div>
            <h1 className="text-gray-800  font-bold">
              Etes-vous sûr de bien vouloir supprimer <br /> cette prédications?
            </h1>

            <p className="text-gray-600 text-base font-normal my-4">
              Cette action est irreversible et supprimera la prédrications de la
              liste immédiatment.
            </p>
          </div>

          <div className="w-full flex items-center gap-x-4">
            <button
              className="w-full h-12 bg-red-600 text-white font-bold flex items-center justify-center rounded-md"
              onClick={() => handleDeleteSermons()}
              disabled={deleteSermonsLoading}
            >
              {deleteSermonsLoading ? (
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  textAlign="center"
                  color="white"
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass="
                                  "
                />
              ) : (
                "Supprimer"
              )}
            </button>
            <button
              className="w-full h-12 bg-gray-200 font-bold flex items-center justify-center rounded-md text-black"
              onClick={() => document.getElementById("deleteSermons").close()}
              disabled={deleteSermonsLoading}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
