import React from "react";
import "./style.css";

function Card(props) {
  return(
    <div className="col-3">
    <div className="card">
      <img alt={props.id} src={props.image} onClick={()=>props.clickChar(props.id)} />
    </div>
    </div>
  )
}

export default Card;