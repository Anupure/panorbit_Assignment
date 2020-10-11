import React from "react";
import Header from "./Header";

import './Posts.css';

const Posts = (props) => {
  return (
    <div className="Posts">
      <Header pageName="Posts" userDetails={props.userDetails} indexNumber={props.indexNumber} mainDisplay = {props.mainDisplay} setIndex = {props.setIndex}/>
      <div className="comingSoon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default Posts;
