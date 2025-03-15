import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./Layout.css"



const MovingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Welcome',
        2000,
        'To',
        2000,
        'Sneaker Closet!',
        2000,
      ]}
      wrapper="p"
      repeat={Infinity}
    />
  );
};

export default MovingText;