import React, { useState, useEffect } from "react";
import { Cursor } from "./StyledComponents";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("white");
  const size = 50;

  const getNegativeColorAtPosition = (x, y) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const imageData = context.getImageData(x, y, 1, 1).data;

    return `rgb(${255 - imageData[0]}, ${255 - imageData[1]}, ${
      255 - imageData[2]
    })`;
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setColor(getNegativeColorAtPosition(e.clientX, e.clientY));
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <Cursor
      style={{ left: position.x, top: position.y, backgroundColor: color }}
      size={size}
    />
  );
};

const isMobileDevice =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || Math.max(window.innerWidth, window.innerHeight) < 768;

const CursorWrapper = () => {
  if (isMobileDevice) {
    return null; // don't render the custom cursor on mobile devices
  }

  return <CustomCursor />;
};

export default CursorWrapper;
