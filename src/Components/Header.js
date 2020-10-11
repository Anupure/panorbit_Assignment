import React, { useState} from "react";
import "./Header.css";
import Dropdown from "./Dropdown";

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const switchDropdownOpenClose = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="Header">
      <div className="pageName" style={{ flex: "0.5" }}>
        <h1 className="singular" style={{fontSize: "20px", color: "#5F5F5F", height: "100%", margintop: "20px;"}}>{props.pageName}</h1>
      </div>
      <div className="dropDown" style={{ flex: "0.5" }}>
        <a className="userProfile" href="#" onClick={switchDropdownOpenClose} >
          <div className="avatarLogin">
            <img src={props.userDetails[props.indexNumber].profilepicture} alt="profile Picture"></img>
          </div>
          <p className="userNameFull">{props.userDetails[props.indexNumber].name}</p>
        </a>
        {dropdownOpen && (
          <Dropdown className="drop" userDetails={props.userDetails} indexNumber = {props.indexNumber} mainDisplay = {props.mainDisplay} setIndex = {props.setIndex}/>
        )}
      </div>
    </div>
  );
};

export default Header;
