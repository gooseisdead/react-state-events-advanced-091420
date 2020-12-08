import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeys = () => {
    return this.props.beyArray.map(el => <BeyCard key={el.id} bey={el} clickHandler={this.props.clickHandler}/> )
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
