import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
  <div className="move remove" onClick={() => props.removeFriend(props.id)} >
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    
      
    </div>
    </div>
  );
}

export default FriendCard;
