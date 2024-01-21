import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../componens/navigation/BottomNav.jsx";
import { ToastContainer } from "react-toastify";

const Context = createContext();
export default function Layout() {
  const [contextState, setContextState] = useState({});
  const context = { state: contextState, setter: setContextState };
  return (
    <>
      <Context.Provider value={context}>
        <ToastContainer />
        <div className="container">
          <Outlet />
          <div
            className="position-fixed bottom-0 w-100"
            style={{ left: "50%", translate: "-50% 0", height: "" }}
          >
            <BottomNav />
          </div>
        </div>
      </Context.Provider>
    </>
  );
}
