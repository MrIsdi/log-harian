import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAddchart } from "react-icons/md";
import { FaHamburger, FaTimes } from "react-icons/fa";

function Sidebar({ name }) {
  const [show, setShow] = useState(false)
  return (
    <aside className={`bg-slate-800 md:w-1/5 w-3/4 flex flex-col justify-around rounded-e-3xl ring-1 ring-slate-900/50 md:static absolute top-0 bottom-0 duration-500 ease-in-out ${show? 'left-0': 'left-[-100%]'} z-50`}>
      <button className="md:hidden block absolute top-[3%] right-[10%]" onClick={()=>setShow(!show)}>
        <FaTimes className="text-3xl text-slate-50" />
      </button>
      <button className={`md:hidden block fixed top-[3%] right-[10%] ${show? 'hidden': 'block'}`} onClick={()=>setShow(!show)}>
        <FaHamburger className="text-3xl text-slate-50" />
      </button>
      <header className="h-20 grid place-items-center my-12 basis-1/5">
        <img src={Logo} alt="Logo" className="w-1/4" />
      </header>
      <main className="basis-3/5">
        {name === "direktur" ? (
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/direktur"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <MdSpaceDashboard className="text-3xl me-2" />
                <p className="text-xl">Dashboard</p>
              </a>
            </li>
            <li>
              <a
                href="/direktur/validasi"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <BiSolidReport className="text-3xl  me-2" />
                <p className="text-xl ">Validasi Log Harian</p>
              </a>
            </li>
          </ul>
        ) : name === "manager" ? (
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/manager"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <MdSpaceDashboard className="text-3xl me-2" />
                <p className="text-xl">Dashboard</p>
              </a>
            </li>
            <li>
              <a
                href="/manager/validasi"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <BiSolidReport className="text-3xl  me-2" />
                <p className="text-xl ">Validasi Log Harian</p>
              </a>
            </li>
            <li>
              <a
                href="/manager/log"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <MdAddchart className="text-3xl  me-2" />
                <p className="text-xl ">Log harian</p>
              </a>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="/staf"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <MdSpaceDashboard className="text-3xl me-2" />
                <p className="text-xl">Dashboard</p>
              </a>
            </li>
            <li>
              <a
                href="/staf/log"
                className="flex m-auto w-4/5 text-slate-400 hover:text-slate-50"
              >
                <BiSolidReport className="text-3xl  me-2" />
                <p className="text-xl ">Log Harian</p>
              </a>
            </li>
          </ul>
        )}
      </main>
      <footer className="basis-1/5 flex items-center">
        <ul className="w-full">
          <li>
            <button className="flex m-auto w-4/5 text-red-400 hover:text-red-600">
              <IoLogOutOutline className="text-3xl me-2" />
              <p className="text-xl">Logout</p>
            </button>
          </li>
        </ul>
      </footer>
    </aside>
  );
}

export default Sidebar;
