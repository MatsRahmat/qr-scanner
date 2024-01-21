import React, { useEffect, useState } from "react";
import Scanner from "../../componens/Scanner";
import { toast } from "react-toastify";

export default function ScanPage() {
  const style = {
    height: "100%",
    width: "100%",
  };

  const toasConfig = {
    autoClose: 3000,
    position: "top-right",
  };

  const [isScan, setIsScan] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [facingCam, setFacingCam] = useState("environment");
  const [result, setResult] = useState(null);

  const toggleFacingCam = () => {
    setFacingCam((prev) => {
      if (prev === "environment") return "front";
      else if (prev === "front") return "environment";
    });
  };

  const toggleOnOff = () => {
    if (isScan) {
      setIsScan(false);
      setIsLoad(false);
    } else {
      setIsScan(true);
      setResult(null);
    }
  };
  const handleOnScan = (resultScan) => {
    if (resultScan !== null) {
      setResult(resultScan);
      toggleOnOff();
    }
  };

  const handleCopyText = async () => {
    try {
      if (result) {
        await navigator.clipboard.writeText(result?.text);
        toast.success("Success Copy Text", toasConfig);
      } else {
        toast.error("Result scan is empty", toasConfig);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div>
        <div className="my-2">
          <h2 className="text-center">QR Scanner</h2>
        </div>
        <div
          style={{ width: "100%", minHeight: "50vw" }}
          className="my-2 mx-auto border"
        >
          {isScan ? (
            <Scanner
              onScan={handleOnScan}
              onLoad={() => setIsLoad(true)}
              style={style}
              facingMode={facingCam}
            />
          ) : (
            <div className="d-flex h-100 justify-content-center align-items-center bg-align-baseline">
              <h1>Scan Now</h1>
            </div>
          )}
        </div>
        <div className="d-flex gap-2 justify-content-center">
          <button
            className="btn btn-primary"
            disabled={!isScan}
            onClick={toggleFacingCam}
          >
            {facingCam === "front" ? "Front" : "Rear"} Camera
          </button>
          <button className="btn btn-success" onClick={toggleOnOff}>
            {isScan ? "Turn Off" : "Scan"}
          </button>
        </div>
        <div className="mt-4">
          <div className="container row">
            <div className="col">
              <h2 className="text-center">Result</h2>
              <p
              className="text-break"
                style={{
                  background: "#334155",
                  padding: "7px",
                  color: "#e2e8f0",
                  borderRadius: "7px",
                }}
              >
                {result ? result?.text : "Result appear here"}
              </p>
            </div>
            <div className="col-1 d-flex align-items-center">
              <span
                className="material-symbols-outlined block"
                style={{ fontSize: "2rem" }}
                onClick={handleCopyText}
              >
                content_copy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
