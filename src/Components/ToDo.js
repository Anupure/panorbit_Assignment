import React from "react";
import Header from "./Header";

const ToDo = (props) => {
  return (
    <div className="ToDo">
      <Header pageName="ToDo" userDetails={props.userDetails} indexNumber={props.indexNumber} mainDisplay = {props.mainDisplay} setIndex = {props.setIndex}/>
      <div className="comingSoon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default ToDo;
