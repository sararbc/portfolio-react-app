import React from "react";

export default function Headear(){
  return (
  <div className="Header">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top flex-row-reverse"
      >
        <a className="navbar-brand" href="..."></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="index.html"
                >Work <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="..">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>);
}