var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

cardsInPlay.length;
    if (cardsInPlay.length === 2 ) {
        console.log("Let's Hope they match!");
        if (cardsInPlay[0]=== cardsInPlay[1]) {
            alert("You found a match!");

        } else if (cardsInPlay[0]!== cardsInPlay[1]) {
            alert("Sorry, try again...");
        }
    }