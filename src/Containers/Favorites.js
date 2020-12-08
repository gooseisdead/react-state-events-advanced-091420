import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";

export default class Favorites extends Component {

  renderBeys = () => {
    return this.props.beyArray.map(el => <BeyCard key={el.id} bey={el} clickHandler={""} /> )
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
    );
  }
}
