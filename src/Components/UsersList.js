import React, { useState, useEffect } from "react";
import axios from "axios";

import imgSvg from "../Assets/layerFinal.svg";
import Profile from "./Profile";
import "./UsersList.css";

const UsersList = () => {
  const [persons, setPersons] = useState([]);
  const [profile, setProfile] = useState(false);
  const [indexNumber, setIndexNumber] = useState(null);

  const profileDisplay = (index) => {
    setProfile(true);
    setIndexNumber(index);
  };

  const profileHide = () => {
    setProfile(false);
  };

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => setPersons(res.data.users));
  }, []);

  const displayList = persons.map((person, index) => {
    return (
      <div className="user" onClick={() => profileDisplay(index)} key={index}>
        <div className="avatar">
          <img src={person.profilepicture} alt="profile Picture"></img>
        </div>
        <h5 className="userNameFull">{person.name}</h5>
      </div>
    );
  });

  if (!profile) {
    return (
      <div className="contentHolder">
        <img src={imgSvg} width="100%" style={{ position: "absolute" }} />
        <div className="cont">
          <div className="UsersList" style={{ position: "relative" }}>
            <h2>Select an Account</h2>
            <div className="listOfUsers">{displayList}</div>
          </div>
        </div>
      </div>
    );
  }
  return <Profile persons={persons} indexNumber={indexNumber} mainDisplay = {profileHide}/>;
};

export default UsersList;
