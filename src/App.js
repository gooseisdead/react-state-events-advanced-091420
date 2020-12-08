import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer.js"
import Favorites from "./Containers/Favorites.js"
import ApiResponse from "./api.js"

class App extends React.Component {

    state = {
      ApiResponse
    }

    appClickHandler = (id) => {
      let newArray = [...this.state.ApiResponse]
      let foundObj = newArray.find(el => el.id === id)
      foundObj.favorite = true
      this.setState({ ApiResponse: newArray })
    }

    findAllFavorites = () => {
      return this.state.ApiResponse.filter(el => el.favorite)
    }

    render() {
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.ApiResponse} clickHandler={this.appClickHandler} />
        <Favorites beyArray={this.findAllFavorites()}/>
      </div>
    );
  }
};

export default App;
