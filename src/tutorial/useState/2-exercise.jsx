import React, { useState } from "react";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Mike" },
  { id: 3, name: "Baby" },
  { id: 4, name: "Rocky" },
];
const UseStateArray = () => {
  const [names, setNames] = useState(data);

  const handleDelete = (id) => {
    setNames((prev) => prev.filter((name) => name.id !== id));
  };

  return (
    <>
      {names.map((name) => {
        return (
          <div
            key={name.id}
            className="p-4 flex justify-between bg-white rounded-sm w-full"
          >
            <h1>{name.name}</h1>
            <button
              onClick={() => handleDelete(name.id)}
              className="text-blue-400"
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setNames([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
