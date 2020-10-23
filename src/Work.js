import React from "react";

export default function Work(){
  return(  
        // Grid row 
    <div className="row">
      <div className="gallery" id="gallery">
        <div className="mb-3 pics animation all 2">
          <div className="view-overlay">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
              alt="Card image cap"
            />
            <div className="overlay">
              <p className="text">Light overlay</p>
            </div>
          </div>
        </div>
        <div className="mb-3 pics animation all 1">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
            alt="Card image cap"
          />
        </div>
        <div className="mb-3 pics animation all 1">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
            alt="Card image cap"
          />
        </div>
        <div className="mb-3 pics animation all 2">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
            alt="Card image cap"
          />
        </div>
        <div className="mb-3 pics animation all 2">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
            alt="Card image cap"
          />
        </div>
        <div className="mb-3 pics animation all 1">
          <img
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
            alt="Card image cap"
          />
        </div>
      </div>
    </div>
  );
}