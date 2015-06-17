(function () {
	'use strict';

	var Card = require('./Card'),
		CARDS_IN_A_DECK = 52;

	function Deck () {
		this.cards = [];
	}

	Deck.prototype.init = function() {
		var i,
			cards = this.cards;

		for(i = 0; i < CARDS_IN_A_DECK; i++) {
			cards.push(new Card(i + 1));
		}

		this.shuffle();
	};

	Deck.prototype.shuffle = function() {
		var currentCard,
			unshuffledCards = this.cards.concat(),
			i;

		this.cards = [];
		while (unshuffledCards.length > 0) {
			currentCard = Math.floor(Math.random() * unshuffledCards.length);
			this.cards.push(unshuffledCards.splice(currentCard, 1)[0]);
		}
	};

	module.exports = Deck;
}());