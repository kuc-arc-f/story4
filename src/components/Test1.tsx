
import React from "react";
type Props = {
  text: string;
};

export default function Test1(props :Props) {
  const text = props.text;

  const clickHandler = () => {
    console.log("clickHandler");
  }
  return (
    <div className="bg-light">
      <h3>Test1 : {text}</h3>
      <hr className="my-1" />
      <button className="btn btn-outline-primary" onClick={() =>clickHandler()}>{text}
      </button>
    </div>
  );
};
