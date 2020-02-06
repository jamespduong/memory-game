import React, { Component } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { getImages } from "../api/picsum";
import { generateCards } from "../utils/helpers";
import { matchTimer, numOfCards } from "../config/index";
import "../styles/App.css";

class App extends Component {
  state = {
    cards: [],
    cardsSelected: [],
    cardsMatched: [],
    clickable: true
  };

  handleClick = ids => {
    const { clickable } = this.state;

    if (!clickable) return null; // to prevent mass clicking

    this.setState(
      prevState => ({ cardsSelected: [...prevState.cardsSelected, ids] }),
      () => {
        const { cardsSelected } = this.state;

        if (cardsSelected.length === 2) {
          this.setState({ clickable: false }, () => {
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
              // check game status
              this.checkWin();
              this.setState({ clickable: true }); // to prevent mass user clicking / cheating!
            }, matchTimer);
          });
        }
      }
    );
  };

  componentDidMount() {
    getImages()
      .then(res => {
        this.setState({ cards: generateCards(res.data) });
      })
      .catch(err => console.warn("api error", err));
  }

  checkWin = () => {
    const { cardsMatched } = this.state;

    if (cardsMatched.length === numOfCards - 1) return alert("You win!");
  };

  renderCards = () => {
    const { cards, cardsSelected, cardsMatched } = this.state;

    if (cards.length < 1) return <Loading />;

    return cards.map(({ download_url, id, pairid, author }) => {
      return (
        <Card
          alt={`Photo by author, ${author}`}
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
