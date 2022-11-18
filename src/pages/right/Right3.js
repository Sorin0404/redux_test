import React from "react";
import { useDispatch } from "react-redux";

const Right3 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "PLUS" });
        }}
      />
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "MINUS" });
        }}
      />
    </div>
  );
};

export default Right3;
