import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Direktur from "../pages/Direktur";
import ValidasiDirektur from "../pages/Direktur/ValidasiDirektur";
import UpdateValidasi from "../pages/Direktur/ValidasiDirektur/UpdateValidasi";
import Staf from "../pages/Staf";
import Log from "../pages/Staf/Log";
import LogCreate from "../pages/Staf/Log/Create";
import Manager from "../pages/Manager";
import ValidasiManager from "../pages/Manager/ValidasiManager";
import UpdateValidasiM from "../pages/Manager/ValidasiManager/UpdateValidasi";
import LogManager from "../pages/Manager/Log";
import LogCreateM from "../pages/Manager/Log/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/direktur",
    element: <Direktur />
  },
  {
    path: "/direktur/validasi",
    element: <ValidasiDirektur />
  },
  {
    path: "/direktur/validasi/:id",
    element: <UpdateValidasi />
  },
  {
    path: "/manager",
    element: <Manager />
  },
  {
    path: "/manager/validasi",
    element: <ValidasiManager />
  },
  {
    path: "/manager/validasi/:id",
    element: <UpdateValidasiM />
  },
  {
    path: "/manager/log",
    element: <LogManager />
  },
  {
    path: "/manager/log/create",
    element: <LogCreateM />
  },
  {
    path: "/staf",
    element: <Staf />
  },
  {
    path: "/staf/log",
    element: <Log />
  },
  {
    path: "/staf/log/create",
    element: <LogCreate />
  }
]);

export default router;
