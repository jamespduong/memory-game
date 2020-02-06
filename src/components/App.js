import React, { Component } from "react";
import Card from "./Card";
import "../styles/App.css";
import { getImages } from "../api/unsplash";
import { duplicateNShuffleArray } from "../utils/helpers";
import shortid from "shortid";

class App extends Component {
  state = { cards: [], cardsSelected: [], cardsMatched: [] };

  handleClick = ids => {
    this.setState(
      prevState => ({ cardsSelected: [...prevState.cardsSelected, ids] }),
      () => {
        console.log("state", this.state);
        const { cardsSelected } = this.state;

        if (cardsSelected.length === 2) {
          setTimeout(() => {
            // if pairs match
            if (cardsSelected[0].pairid === cardsSelected[1].pairid) {
              console.log("match");
              this.setState(
                prevState => ({
                  cardsMatched: [
                    ...prevState.cardsMatched,
                    cardsSelected[0].id,
                    cardsSelected[1].id
                  ],
                  cardsSelected: []
                }),
                () => console.log("state", this.state)
              );
              // if pairs don't match
            } else {
              console.log("no match");
              this.setState({ cardsSelected: [] });
            }
          }, 2000);
        }
      }
    );
  };

  componentDidMount() {
    getImages().then(res => {
      this.setState({ cards: duplicateNShuffleArray(res.data.results) }, () =>
        console.log("state", this.state)
      );
    });
  }

  renderCards = () => {
    const { cards, cardsSelected, cardsMatched } = this.state;
    if (cards.length < 1) return <div> loading...</div>;

    return cards.map(({ urls, id, pairid }) => {
      return (
        <Card
          key={id}
          id={id}
          pairid={pairid}
          src={urls.small}
          handleClick={this.handleClick}
          selected={cardsSelected.find(card => card.id === id)}
          matched={cardsMatched.includes(id)}
        />
      );
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
