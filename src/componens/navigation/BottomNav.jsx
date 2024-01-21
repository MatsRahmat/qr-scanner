import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LIST_COLOR } from "../../config";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState("scan");

  useEffect(() => {
    setActivePath(location.pathname);
    // console.log(location.pathname);
  }, [location]);

  const handleChangePage = (page) => {
    navigate(activePath !== page ? page : activePath);
  };

  return (
    <>
      <div
        className="bg-primary d-flex flex-row w-100 justify-content-between px-4"
        style={{ height: "3rem" }}
      >
        <div
          style={{ height: "100%", color: "white" }}
          onClick={() => handleChangePage("list")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={activePath === "/list" ? 50 : 43}
            viewBox="0 -960 960 960"
            width={activePath === "/list" ? 50 : 43}
            className="mx-auto"
            fill={activePath === "/list" ? LIST_COLOR.WHITE : LIST_COLOR.BLACK}
          >
            <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
          </svg>
        </div>
        <div
          style={{ height: "100%", color: "white" }}
          onClick={() => handleChangePage("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={activePath === "/" ? 50 : 43}
            viewBox="0 -960 960 960"
            width={activePath === "/" ? 50 : 43}
            fill={activePath === "/" ? LIST_COLOR.WHITE : LIST_COLOR.BLACK}
          >
            <path d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z" />
          </svg>
        </div>
        <div
          style={{ height: "100%", color: "white" }}
          onClick={() => handleChangePage("about")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={activePath === "/about" ? 50 : 43}
            viewBox="0 -960 960 960"
            width={activePath === "/about" ? 50 : 43}
            fill={
              activePath === "/about" ? LIST_COLOR.WHITE : LIST_COLOR.BLACK
            }
          >
            <path d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z" />
          </svg>
        </div>
      </div>
    </>
  );
}