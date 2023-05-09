import React from "react";

export default function Counter({ count, setCount }) {
  const handleIncrase = () => {
    setCount((prv) => (prv = prv + 1));
  };

  const handleDecrase = () => {
    if (count <= 0) {
      alert(" count can't be nagative!");
      return;
    }

    setCount((prv) => (prv = prv - 1));
  };

  return (
    <div>
      <div>
        <span className="my-[4rem] block">{count}</span>

        <div className=" space-x-10">
          <button
            onClick={() => handleIncrase()}
            className="  py-2 px-4 text-[1rem]  bg-slate-500 rounded-md text-white"
          >
            Incrase
          </button>

          <button
            onClick={() => handleDecrase()}
            className="  py-2 px-4 text-[1rem]  bg-slate-500 rounded-md text-white"
          >
            Decrase
          </button>
        </div>
      </div>
    </div>
  );
}
