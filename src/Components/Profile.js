import React, { useState } from "react";
import ProfileSideBar from "./ProfileSidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProfileContent from "./ProfileContent";
import Posts from "./Posts";
import Gallery from "./Gallery";
import "./Profile.css";
import ToDo from "./ToDo";

const Profile = (props) => {
  const [currentIndex, setCurrentIndex] = useState(props.indexNumber);


  return (
    <Router>
      <div className="Profile">
        <ProfileSideBar />
        <Route
          path="/"
          exact
          component={() => <ProfileContent userDetails={props.persons} indexNumber={currentIndex} mainDisplay = {props.mainDisplay} setIndex = {setCurrentIndex}/>}
        />
        <Route
          path="/posts"
          component={() => <Posts userDetails={props.persons} indexNumber={currentIndex} mainDisplay = {props.mainDisplay} setIndex = {setCurrentIndex}/>}
        />
        <Route
          path="/gallery"
          component={() => <Gallery userDetails={props.persons} indexNumber={currentIndex} mainDisplay = {props.mainDisplay} setIndex = {setCurrentIndex}/>}
        />
        <Route
          path="/todo"
          component={() => <ToDo userDetails={props.persons} indexNumber={currentIndex} mainDisplay = {props.mainDisplay} setIndex = {setCurrentIndex}/>}
        />
      </div>
    </Router>
  );
};

export default Profile;
