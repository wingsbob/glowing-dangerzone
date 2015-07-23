(function () {
	'use strict';

	function getSuitMapValue (cardType) {
		var adjustedValue = cardType - cardType % 13,
			suitMapValue;

		suitMapValue = adjustedValue / 4;
		if (suitMapValue === 4) {
			suitMapValue = 0;
		}

		return suitMapValue;
	}

	function Card (cardType) {
		this.value = this.valueMap[cardType % 13];
		this.suit = this.suitMap[getSuitMapValue(cardType)];
		this.isPictureCard = !!parseInt(this.value);
		this.isHigh = this.isPictureCard;
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

	Card.prototype.toString = function() {
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

	module.exports = Card;
}());