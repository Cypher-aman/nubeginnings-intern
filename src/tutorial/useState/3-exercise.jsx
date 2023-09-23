import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexCounter = () => {
    setTimeout(() => {
      setValue((prev) => {
        return prev + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h1 className="text-center text-xl font-bold">Regular Counter</h1>
      <section className="">
        <h2 className="text-center text-2xl font-bold mb-5">{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <h1 className="text-center text-xl font-bold">Cpmplex Counter</h1>
      <section className="">
        <h2 className="text-center text-2xl font-bold mb-5">{value}</h2>
        <button className="btn" onClick={complexCounter}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
