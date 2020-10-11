import React from "react";
import "./Dropdown.css";

const Dropdown = (props) => {


  
const displayOtherUsers =() => {
  if(props.indexNumber >= 8) {
    return(
      <div>
        <div className="otherUser" onClick={() => props.setIndex(props.indexNumber -2)}>
          <img alt="" src={props.userDetails[props.indexNumber -2].profilepicture} className="otherUserImage"/>
          <p>{props.userDetails[props.indexNumber -1].name}</p>
        </div>
        <div className="otherUser"  onClick={() => props.setIndex(props.indexNumber -1)}>
          <img alt="" src={props.userDetails[props.indexNumber -1].profilepicture} className="otherUserImage"/>
          <p>{props.userDetails[props.indexNumber -1].name}</p>
        </div>
      </div>
    )
  }else {
    return (
      <div>
        <div className="otherUser"  onClick={() => props.setIndex(props.indexNumber +2)}>
          <img alt="" src={props.userDetails[props.indexNumber +2].profilepicture} className="otherUserImage"/>
          <p className="textValues">{props.userDetails[props.indexNumber +2].name}</p>
        </div>
        <div className="otherUser"  onClick={() => props.setIndex(props.indexNumber +1)}>
          <img alt="" src={props.userDetails[props.indexNumber +1].profilepicture} className="otherUserImage"/>
          <p className="textValues">{props.userDetails[props.indexNumber +1].name}</p>
        </div>
        
      </div>
    )
  }
  
}

  return (
    <div className="Dropdown" style={{ position: "absolute" }}>
      <div className="dopdownEntries">
        <div className="currentUser">
          <img alt="" src={props.userDetails[props.indexNumber].profilepicture} className="currentImage"/>
          <p className="textValues">{props.userDetails[props.indexNumber].name}</p>
          <p >{props.userDetails[props.indexNumber].email}</p>
        </div>
        <div className="otherUserHolder">
          {displayOtherUsers()}
        </div>
        <button className="signOffButton" onClick={props.mainDisplay}>Sign Out</button>
      </div>
    </div>
  );
};

export default Dropdown;
