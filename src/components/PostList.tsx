
import React from "react";
import Post from './Post';

type Props = {
//  text: string;
  items: any[];
};

export default function PostList(props :Props) {
  console.log(props.items);
  const items = props.items;

  return (
    <div className="bg-light">
      <h3>PostList</h3>
      <hr />
      { items.map((item: any, index: number) => (
        <Post key={index} title={item.title} id={item.id} />
      ))        
      }      
    </div>
  );
};
