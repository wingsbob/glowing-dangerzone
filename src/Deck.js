(function () {
	'use strict';

	var Card = require('./Card'),
		randomUtils = require('./Utils/randomness'),
		CARDS_IN_A_DECK = 52;

	function Deck () {
		this.cards = [];
	}

	/**
	 * Populates the deck with the required cards and shuffles
	 */
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
			numberOfCards = unshuffledCards.length,
			i;

		this.cards = [];
		for (i = 0; i < numberOfCards; i++) {
			currentCard = randomUtils.spliceArrayElement(unshuffledCards);
			this.cards.push(currentCard);
		}
	};

	Deck.prototype.draw = function() {
		return this.cards.pop();
	};

	module.exports = Deck;
}());