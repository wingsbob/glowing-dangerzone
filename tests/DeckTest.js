(function () {
	'use strict';

	var Deck = require('../src/Deck'),
		deckInstance;

	describe('Deck', function () {
		describe('constructor', function () {
			it('has an empty collection of cards', function () {
				deckInstance = new Deck();

				expect(deckInstance.cards).toEqual({});
			});
		});
	});
}());