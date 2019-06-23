import React from "react";
import "./style.css";

function Card(props) {
  return(
    <div className="col-3">
    <div className="card" onClick={()=>props.clickChar(props.id)} >
      <img alt={props.id} src={props.image} />
    </div>
    </div>
  )
}

export default Card;