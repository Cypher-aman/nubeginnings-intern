import React, { useState } from "react";

const useStateChangeTitle = () => {
  const [title, setTitle] = useState("Title 1");

  const handleChange = () => {
    title === "Title 1" ? setTitle("Title 2") : setTitle("Title 1");
  };

  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>
      <button onClick={handleChange} className="btn">
        Change Title
      </button>
    </>
  );
};

export default useStateChangeTitle;
