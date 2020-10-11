import React from "react";
import Header from "./Header";

const Gallery = (props) => {
  return (
    <div className="ProfileContent">
      <Header pageName="Gallery" userDetails={props.userDetails} indexNumber={props.indexNumber} mainDisplay = {props.mainDisplay} setIndex = {props.setIndex}/>
      <div className="comingSoon">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default Gallery;
