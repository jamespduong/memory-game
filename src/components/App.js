import React, { Component } from "react";
import Card from "./Card";
import { getImages } from "../api/unsplash";
import { duplicateNShuffleArray } from "../utils/helpers";
import { matchTimer } from "../config/index";
import "../styles/App.css";

class App extends Component {
  state = { cards: [], cardsSelected: [], cardsMatched: [] };

  handleClick = ids => {
    this.setState(
      prevState => ({ cardsSelected: [...prevState.cardsSelected, ids] }),
      () => {
        const { cardsSelected } = this.state;

        if (cardsSelected.length === 2) {
          setTimeout(() => {
            const cardOne = cardsSelected[0];
            const cardTwo = cardsSelected[1];

            // if pairs match
            if (cardOne.pairid === cardTwo.pairid) {
              this.setState(prevState => ({
                cardsMatched: [
                  ...prevState.cardsMatched,
                  cardOne.id,
                  cardTwo.id
                ],
                cardsSelected: []
              }));
              // if pairs don't match
            } else {
              this.setState({ cardsSelected: [] });
            }
          }, matchTimer);
        }
      }
    );
  };

  componentDidMount() {
    getImages().then(res => {
      console.log("res", res);
      this.setState({ cards: duplicateNShuffleArray(res.data) }, () =>
        console.log("state", this.state)
      );
    });
  }

  renderCards = () => {
    const { cards, cardsSelected, cardsMatched } = this.state;
    if (cards.length < 1) return <div> loading...</div>;

    return cards.map(({ download_url, id, pairid }) => {
      return (
        <Card
          key={id}
          id={id}
          pairid={pairid}
          src={download_url}
          handleClick={this.handleClick}
          selected={cardsSelected.find(card => card.id === id)}
          matched={cardsMatched.includes(id)}
        />
      );
    });
  };

  render() {
    return <div className="container-cards">{this.renderCards()}</div>;
  }
}

export default App;
