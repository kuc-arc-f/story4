
import React from "react";
type Props = {
  text: string;
};

// const TestButton: React.VFC<Props> = ({ text }) => {
export default function TestButton(props :Props) {
  const text = props.text;

  const clickHandler = () => {
    console.log("clickHandler");
  }
  return (
    <button style={{ padding: "5px" }} onClick={() =>clickHandler()}>{text}
    </button>
);
};

//export default TestButton;
