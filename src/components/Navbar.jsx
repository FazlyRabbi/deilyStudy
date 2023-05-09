"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Child from "./Child";

export default function Navbar() {

  const [name, setName] = useState("rabbi");

  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("calling...");
  }, []);

  const handleSum = (num, num2) => {
   console.log("hello");
  };

  return (
    <div>
      {/* <h1 className="  text-red-600 text-[5rem] " onClick={() => sum(10, 20)}>
        {number}
      </h1> */}
      <Child name={name} setName={setName} handleSum={handleSum} />
    </div>
  );
}

