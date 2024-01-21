import React from "react";
import QrScanner from "react-qr-scanner";
export default function Scanner({ onScan, style, onLoad, facingMode }) {
  const handleLoad = (e) => {
    onLoad();
  };

  const handleScan = (e) => {
    if (typeof onScan === "function") {
      onScan(e);
    }
  };

  const handleError = (e) => {
    console.error(e);
  };

  return (
    <div>
      <QrScanner
        onScan={handleScan}
        onLoad={handleLoad}
        onError={handleError}
        style={style}
        constraints={{ video: { facingMode } }}
      />
    </div>
  );
}
