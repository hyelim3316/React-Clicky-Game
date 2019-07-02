import React from "react";
import "./style.css";

function Header() {
  return(
  <div className="jumbotron d-flex align-items-center">
  <div className="container vertical-center">
    <h1 className="display-4">Pokemon Clicky Game!</h1>
      <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
  </div>
  </div>
  )
}

export default Header;
