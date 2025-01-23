import { CircularProgress, Drawer, Pagination, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Pencil from "../../../Assets/Icons/pen-2-svgrepo-com (2).svg";
import toast from "react-hot-toast";
import Trash from "../../../Assets/Icons/trash-bin-minimalistic-2-svgrepo-com.svg";
import { RotatingLines } from "react-loader-spinner";

export default function EnglishSermons() {
  const [SermonsData, setSermonsData] = useState([
    {
      id: 1,
      title: "Kacou 1 : This is the Voice of Matthew 25:6",
      detail: "Preached on July 8, 2002...",
      description: `1- Like the prophets of the Bible, in April 1993, I, Kacou Philippe, a man who had never been in a church, I receive in a vision, the visitation of an Angel who commissions me for a Message destined`,
    },
    {
      id: 2,
      title: "Kacou 2 : Pronounce the Judgment!",
      detail:
        "Preached on Sunday August 18, 2002 in Locodjro, Abidjan - Ivory Coast",
      description:
        "1-  I take my text this morning from Revelation 14:6 to 10. I read: And I saw another angel flying in mid-heaven, having the everlasting glad tidings to announce to those settled on the earth,...",
    },
    {
      id: 3,
      title: "Kacou 3 : A prophet from God",
      detail:
        "Preached on Sunday, October 20, 2002 in Locodjro, Abidjan - Ivory Coast",
      description:
        "1- The Gospel of the Kingdom of the Heavens always comes from Heaven through an angel while there is another gospel that comes from the abyss through pastoral school for God...",
    },
    {
      id: 4,
      title: "Kacou 4 : The seven Church ages and the seven seals",
      detail:
        "Preached on Sunday, November 10, 2002 in Locodjro, Abidjan - Ivory Coast",
      description:
        "1- From the outpouring of the Holy Spirit in Acts 2 to the rapture, the Church of the nations is divided into seven periods or ages. That is to say, at such a time...",
    },
    {
      id: 5,
      title: "Kacou 5 : The fulfilment of Matthew 25:6",
      detail:
        "Preached on Sunday morning, December 15, 2002 in Locodjro, Abidjan - Ivory Coast",
      description:
        "1- OWe must not make the same mistakes that the Jews made against the prophets and against the Lord Jesus Christ...",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [selectedSemon, setSelectedSemon] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [updateSermonLoading, setUpdateSermonLoading] = useState(false);
  const [deleteSermonsLoading, setDeleleSermonsLoading] = useState(false);

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
                <th>Title</th>
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
                        Any sermons found!
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

      {/* DELETE SERMONS MODAL  */}

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
