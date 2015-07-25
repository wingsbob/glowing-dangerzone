(function () {
	'use strict';

	function getSuitMapValue (cardType) {
		var adjustedValue,
			suitMapValue;

		cardType--;
		adjustedValue = cardType - cardType % 13
		suitMapValue = adjustedValue / 13;

		return suitMapValue;
	}

	function Card (cardType) {
		if (cardType > 0 && cardType < 53) {
			this.value = this.valueMap[cardType % 13];
			this.suit = this.suitMap[getSuitMapValue(cardType)];
			this.isPictureCard = !!parseInt(this.value);
			this.isHigh = this.isPictureCard;
		} else {
			throw new RangeError('cardtype must be a number between 1 and 52');
		}
	}

	Card.prototype.valueMap = {
		0: 'A',
		1: '2',
		2: '3',
		3: '4',
		4: '5',
		5: '6',
		6: '7',
		7: '8',
		8: '9',
		9: '10',
		10: 'J',
		11: 'Q',
		12: 'K',
	};

	Card.prototype.suitMap = {
		0: 'Clubs',
		1: 'Diamonds',
		2: 'Hearts',
		3: 'Spades'
	};

	/**
	 * Returns the numeric value of the card.
	 * Aces can be high or low defined by the "isHigh" flag
	 * @return {Number} The numeric value of the card
	 */
	Card.prototype.valueOf = function() {
		var rawValue = this.value,
			numericValue = parseInt(rawValue);

		if (!numericValue) {
			if (rawValue !== 'A') {
				numericValue = 10;
			} else if (this.isHigh) {
				numericValue = 11;
			} else {
				numericValue = 1;
			}
		}

		return numericValue;
	};

	Card.prototype.goLow = function() {
		this.isHigh = false;
	};

	Card.prototype.isAFace = function() {
		var value = this.value,
			isFace = isNaN(parseInt(value));

		return isFace && value !== 'A';
	};

	Card.prototype.isAce = function() {
		return this.value === 'A';
	};

	module.exports = Card;
}());