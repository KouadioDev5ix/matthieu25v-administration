import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ShowPassWord from "../../Assets/Icons/show_Password.svg";
import HiddePassWord from "../../Assets/Icons/HiddePASSWRD.svg";
import { RotatingLines } from "react-loader-spinner";
import Logo from "../../Assets/Images/52c3fb8188fb4e31a8d1723c0082e206_320_320.jpg";

import Eagle from "../../Assets/Images/adler-2386314_1280.jpg";

export default function LoginPages() {
  const navigate = useNavigate();

  const [logingLoader, setLogingLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLogingLoader(true);
    setTimeout(() => {
      setLogingLoader(false);
      navigate("/users");
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen bg-white ">
      <div className="w-full flex flex-col md:flex-row">
        {/* IMAGES SECTIONS */}
        <div className="relative w-full md:w-1/2 md:h-screen h-40">
          <div className="absolute inset-0 w-full h-full bg-black/70"></div>
          <img src={Eagle} alt="" className="w-full h-full object-cover" />

          <div className="absolute bottom-7 md:bottom-10 left-7 md:left-10">
            <img
              src="/static/media/outlets.f520d2f4044b58e29687.png"
              alt=""
              className="w-10 md:w-16 object-cover"
            />
            <h1 className=" mt-2 text-3xl md:text-4xl text-white font-bold">
              MATTHIEU 25:6
            </h1>

            <div className="flex items-center mt-2 gap-x-2 text-center text-white md:mt10 text-sm font-medium">
              <h1>Powered by</h1>
              <img src={Logo} alt="" className="w-7 rounded-full" />
            </div>
          </div>
        </div>

        {/* INPUTS SECTIONS */}
        <div className="w-full md:w-1/2 h-screen px-4 pt-16 md:pt-24 md:pb-20 md:overflow-y-scroll">
          <div className="w-[93%] sm:w-[450px] md:w-10/12 lg:w-8/12 mx-auto">
            <div>
              <h1 className="text-2xl text-black text-left font-black">
                Bienvenue sur le backoffice de MATTHIEU25:6
              </h1>
              <p className="mt-4 text-gray-600 text-left font-medium">
                Entrez vos identifiants pour vous connecter
              </p>
            </div>
            <div className="mt-7">
              <div className="">
                <label className="text-sm text-gray-500 font-normal">
                  Nom d'utilisateur<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="yes.itspossible@gmail.com"
                  className="mt-1 input input-bordered outline-none flex items-center rounded-md font-normal bg-gray-50 w-full h-10 text-sm"
                />
              </div>
              <div className="relative ">
                <label className="text-sm text-gray-500 font-normal">
                  Mot de passe<span className="text-red-500">*</span>
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="***********"
                  className="mt-1 input input-bordered rounded-md font-normal w-full h-10 text-sm pr-10"
                />
                <span
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer inset-y-0 mt-7 right-0 pr-3 flex items-center justify-center text-sm"
                >
                  {showPassword ? (
                    <>
                      <img src={ShowPassWord} alt="" className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      <img src={HiddePassWord} alt="" className="w-5 h-5" />
                    </>
                  )}
                </span>
              </div>
            </div>
            <div className="mt-8">
              <Link to={"/"}>
                <button
                  className="bg-blue-600 w-full h-11 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                  onClick={handleLogin}
                  disabled={logingLoader}
                >
                  {logingLoader ? (
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
                    "Connexion"
                  )}
                </button>
              </Link>

              <div className="divider text-gray-500 font-medium">Ou</div>
              <a className="" href="">
                <button
                  className="mt-3 bg-gray-200 w-full h-11 rounded-lg flex items-center justify-center text-black text-sm font-bold"
                  disabled={logingLoader}
                >
                  Mot de pass oublié ?
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
