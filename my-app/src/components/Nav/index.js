import React from "react";
import "./style.css";

function Nav(props) {
  return(
  <ul className="nav justify-content-center row">
    <li className="logo nav-item col-4">Clicky Game</li>
    <li className="guess nav-item col-4">{props.message}</li>
    <li className="nav-item col-4">Score: {props.score}  |  Top score: {props.topScore} </li>
  </ul>
  )
}

export default Nav;