import React from "react";

const BeyCard = (props) => {

  // let { bey, clickHandler } = props;

  const localClickHandler = () => {
    props.clickHandler(props.bey.id)
  }

  return (
    <div className="card" onClick={localClickHandler}>
      <h2>{props.bey.name}</h2>
      <img src={props.bey.img} alt={props.bey.name}></img>
    </div>
  );
};

export default BeyCard;
