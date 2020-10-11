import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

import Header from "./Header";
import "./ProfileContent.css";

const ProfileContent = (props) => {

  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 12.971599, lng: 77.594566 }}
      />
    );
  }
  

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  
  

  return (
    <div className="ProfileContent">
      <Header pageName="Profile" userDetails={props.userDetails} indexNumber={props.indexNumber} mainDisplay = {props.mainDisplay} setIndex = {props.setIndex}/>
      <div className="profileContainer">
        <div className="profileLeft">
          <div className="topLeft">
            <img src={props.userDetails[props.indexNumber].profilepicture} />
            <p  className="textValues" style={{textAlign:"center"}}>{props.userDetails[props.indexNumber].name}</p>
            <div className="profileSection">
              <p className="profileTexts">Username : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].username}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">e-mail : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].email}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">Phone : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].phone}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">Website : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].website}</p>
            </div>
          </div>
          <div className="bottomLeft">
            <p className="profileTexts" style={{textAlign: "left", color: "#b3b3b3"}}>Company</p>
            <div className="profileSection">
              <p className="profileTexts">Name : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].company.name}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">Catch Phrase : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].company.catchPhrase}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">BS : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].company.bs}</p>
            </div>
          </div>
        </div>
        <div className="profileRight">
          <p className="profileTexts" style={{textAlign:"left"}}>Address: </p>
          <div className="address">
            <div className="profileSection">
              <p className="profileTexts">Street : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].address.street}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">Suite : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].address.suite}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">City : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].address.city}</p>
            </div>
            <div className="profileSection">
              <p className="profileTexts">Zipcode : </p>
              <p className="textValues">{props.userDetails[props.indexNumber].address.zipcode}</p>
            </div>
            <div className="map">
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "5%",
                    }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
