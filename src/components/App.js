import React, { Component } from "react";
import Card from "./Card";
import "../styles/App.css";
import { getImages } from "../api/unsplash";
import { duplicateNShuffleArray } from "../utils/helpers";

class App extends Component {
  state = { cards: [] };

  componentDidMount() {
    console.log("mounted");
    getImages().then(res => {
      console.log("here", res);
      this.setState({ cards: duplicateNShuffleArray(res.data.results) }, () =>
        console.log("state", this.state)
      );
    });
  }

  renderCards = () => {
    const { cards } = this.state;
    console.log("cards", cards);

    return cards.map(({ id, urls }) => {
      return <Card key={id} src={urls.small} />;
    });
  };

  render() {
    return (
      <div className="container-cards">
        <div>{this.renderCards()} </div>
      </div>
    );
  }
}

export default App;
