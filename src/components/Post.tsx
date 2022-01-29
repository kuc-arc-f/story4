
import React from "react";
type Props = {
  id: number,
  title: string;
};

export default function Post(props :Props) {
  const title = props.title;
  const postId = props.id;

  const clickHandler = (postId: number) => {
    console.log("clickHandler:" + String(postId) );
  }
  return (
    <div className="bg-light">
      <div>
        <p className="fs-3 my-0">{title}
          <button className="btn btn-outline-primary mx-2" onClick={() =>clickHandler(postId)}>
            Show
          </button>
        </p>
        ID: {postId}
      </div>
      {/*
      <hr />
      <h3>{title}</h3>
      */}
      <hr className="my-1" />
    </div>
  );
};
