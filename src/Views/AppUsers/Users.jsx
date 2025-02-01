import { CircularProgress, Pagination, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Trash from "../../Assets/Icons/archive-check-svgrepo-com (1).svg";
import Pencil from "../../Assets/Icons/pen-2-svgrepo-com (2).svg";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      nom: "Boga  ",
      prenoms: "Eric Sagnon",
      nomUtilisateur: "Bogasagnon@",
      email: "boga@gmail.com",
      numero: "07 00 09 99 00",
    },
    {
      id: 2,
      nom: "Aipke",
      prenoms: "Archille",
      nomUtilisateur: "aipkeA@",
      email: "archille@gmail.com",
      numero: "05 00 09 07 00",
    },
    {
      id: 3,
      nom: "Bamby",
      prenoms: "Stephane ",
      nomUtilisateur: "stehpane@B",
      email: "bamby@gmail.com",
      numero: "+243 08 09 05 00",
    },
    {
      id: 4,
      nom: "Esaie",
      prenoms: "Bianda Moisès",
      nomUtilisateur: "Bianda@M",
      email: "moses@gmail.com",
      numero: "+244 08 09 05 00",
    },
    {
      id: 5,
      nom: "Kouadio",
      prenoms: "Kouadio Alfred",
      nomUtilisateur: "kouadio@",
      email: "alfred@gmail.com",
      numero: "01 08 09 05 00",
    },
  ]);
  const [addUserLoading, setAddUserLoading] = useState(false);
  const [deleteUserLoading, setDelelteUserLoading] = useState(false);
  const [actionToPerform, setActionToPerform] = useState(false);

  const [loadingStates, setLoadingSatates] = useState({
    dataLoading: false,
    deleteLoading: false,
    actionToPerformLoading: false,
  });

  ///////////LOAD DATA ON COMPONENT WHEN COMPONENT IS MOUNTED::::::::::::::

  const getUserListes = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getUserListes();
  }, []);
  ///////////PERFORM ACTIONS ON ADDING USER ::::::::::::::::::::::::::::::

  /**
   * Open Modal to add a user
   */
  const openModalToAddUser = () => {
    document.getElementById("addUser").showModal();
    setActionToPerform(false);
  };

  const testState = () => {
    setLoadingSatates(loadingStates.actionToPerformLoading === true);
  };

  /**
   * Add a user
   */

  const handleAddUser = () => {
    setAddUserLoading(true);
    setTimeout(() => {
      setAddUserLoading(false);
      document.getElementById("addUser").close();
      toast.success("Utilsateur ajouté avec succès");
    }, 1000);
  };

  //////// DELETEE USER SECTIONS:::::::::::::::::::::::::::::::::

  /**
   * Open Modal/ and select a user To delete
   */

  const OpenDeleteUserModal = () => {
    document.getElementById("deleteUser").showModal();
  };

  /**
   * Delette a specifique user
   * This function will talk an aguerment which is the user selected ID
   *
   */
  const handleDeleteAddUser = () => {
    setDelelteUserLoading(true);
    setTimeout(() => {
      setDelelteUserLoading(false);
      document.getElementById("deleteUser").close();
      toast.success("Utilsateur supprimé avec succès");
    }, 1000);
  };

  ///////////// EDIT USER INFO:::::::::::::::::::::::::::::::::::

  const wantToEditUser = () => {
    document.getElementById("addUser").showModal();

    setActionToPerform(true);
  };

  /**
   * Tanlbe component that map over data to display user
   * @param {*} param0
   * @returns
   */

  const TableElement = ({ item }) => {
    return (
      <tr key={item.id}>
        <td>{item.nom}</td>
        <td>{item.prenoms}</td>
        <td>{item.nomUtilisateur}</td>
        <td>{item.email}</td>
        <td>{item.numero}</td>
        <td className="flex items-center gap-2">
          <Tooltip title="Modifier">
            <button onClick={() => wantToEditUser()}>
              <img src={Pencil} alt="" className="w-5 h-5" />
            </button>
          </Tooltip>
          <Tooltip title="Supprimer">
            <button onClick={() => OpenDeleteUserModal()}>
              <img src={Trash} alt="" className="w-5 h-5" />
            </button>
          </Tooltip>
        </td>
      </tr>
    );
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Utilisateurs</h1>
        <button
          className=" bg-gray-200 border  font-semibold text-black text-sm px-2 h-12 rounded-md"
          onClick={() => openModalToAddUser()}
        >
          Ajouter Utilisateur
        </button>
      </div>
      {/* SEARCH SECTIONS */}
      <div className="flex gap-2 mt-14">
        <input
          type="text"
          placeholder="Recherhcer un utilisateur..."
          className="input input-bordered input-md max-w-xs"
        />
        <button className="text-black h-12 px-4 font-semibold bg-gray-200 rounded-md ">
          Rechercher
        </button>
      </div>

      {/* TABLE SECTIONS */}

      <div className="mt-7">
        <div className="overflow-x-auto rounded-md border shadow">
          <table className="table">
            <thead className="bg-gray-200 text-black font-semibold text-md">
              <tr>
                <th>Nom</th>
                <th>Prénoms</th>

                <th>Nom d'utilisateur</th>

                <th>Email</th>
                <th>Contact</th>

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

              {!loading && usersList.length !== 0
                ? usersList.map((user) => (
                    <TableElement key={user.id} item={user} />
                  ))
                : null}

              {!loading && usersList.length === 0 ? (
                <tr>
                  <th colSpan={6}>
                    <div className="my-10 flex items-center justify-center ">
                      <p className="text-gray-900 text-lg text-center">
                        Aucun administrateur trouvé !
                      </p>
                    </div>
                  </th>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-9">
          <Pagination />
        </div>
      </div>

      {/* ADD USER SECTIONS */}

      <dialog id="addUser" className="modal">
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
                ? "Modifier les infos de l'utilisateur"
                : " Ajouter un utilsateur"}
            </h1>
            <hr />

            <div className="flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Nom
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: Boga"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Prénoms
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: Eric"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>

            <div className="w-full">
              <label className="form-control w-full max-w-full">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Nom utilisateur
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: Boga@Eric"
                  className="input input-bordered w-full max-w-full"
                />
              </label>
            </div>

            <div className="flex items-center gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="text-sm text-gray-600 font-semibold">
                    Email
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="EX: boga@gmail.com"
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
                  placeholder="EX: 07 09 00 00 05"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>

          <div className="w-full flex items-center gap-x-4 mt-4">
            <button
              className="w-full h-12 bg-blue-200 font-bold flex items-center justify-center rounded-md"
              onClick={() => handleAddUser()}
              disabled={addUserLoading}
            >
              {addUserLoading ? (
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
                "Enregister"
              )}
            </button>
            <button
              className="w-full h-12 bg-gray-200 font-bold flex items-center justify-center rounded-md text-black"
              onClick={() => document.getElementById("addUser").close()}
              disabled={addUserLoading}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>

      {/* DELETE USER MODAL*/}

      <dialog id="deleteUser" className="modal">
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
              Etes-vous sûr de bien vouloir supprimer <br /> cet utilisateur ?
            </h1>

            <p className="text-gray-600 text-base font-normal my-5">
              Cette action est irreversible et supprimera l'utilisaeur de la
              liste immédiatment.
            </p>
          </div>

          <div className="w-full flex items-center gap-x-4">
            <button
              className="w-full h-10 bg-red-600 text-white font-bold flex items-center justify-center rounded-md"
              onClick={() => handleDeleteAddUser()}
              disabled={deleteUserLoading}
            >
              {deleteUserLoading ? (
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
              className="w-full h-10 bg-gray-200 font-bold flex items-center justify-center rounded-md text-black"
              onClick={() => document.getElementById("deleteUser").close()}
              disabled={deleteUserLoading}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
