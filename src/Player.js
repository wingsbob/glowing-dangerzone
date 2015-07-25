(function () {
	'use strict';

	function Player() {
		this.hand = [];
		this.busted = false;
		this.blackjack = false;
	}

	Player.prototype.getHandValue = function() {
		var cards = this.hand,
			i,
			total = 0,
			numberOfCards = cards.length;

		for(i = 0; i < numberOfCards; i++) {
			total += cards[i];
		}

		return total;
	};

	Player.prototype.isBusted = function() {
		var handValue = this.getHandValue(),
			isBusted = this.busted;

		if (isBusted || handValue > 21) {
			isBusted = true;
		}
		this.busted = isBusted

		return isBusted;
	};

	Player.prototype.hasBlackjack = function() {
		var blackjack = this.hand.length === 2,
			firstCard = this.hand[0],
			secondCard = this.hand[1],
			hasAce,
			hasFaceCard;

		if (blackjack) {
			hasAce = firstCard.isAce() || secondCard.isAce();
			hasFaceCard = firstCard.isAFace() || secondCard.isAFace();
			blackjack = hasAce && hasFaceCard;
		}

		return blackjack;
	};

	module.exports = Player;
}());