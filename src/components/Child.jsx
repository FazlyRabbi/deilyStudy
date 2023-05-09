import React from "react";

export default function Child({ name, setName, handleSum }) {

  const handleChange = () => {
    setName("rafsbbi");
  };

  return (
    <div>
      <h1 onClick={() => handleChange()} className=" text-[10rem]">
        {name}
      </h1>
    </div>
  );
}
