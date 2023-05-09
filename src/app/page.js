"use client";

import Counter from "@/components/Counter";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className=" text-center font-bold text-[2rem] mt-[2rem]">
        Counter Application With NextJs
        <Counter count={count} setCount={setCount} />
      </h1>
    </>
  );
}
