(function () {
	'use strict';

	var Player = require('../src/Player'),
		playerInstance;

	describe('Player', function () {
		describe('constructor', function () {
			it('has an empty hand', function () {
				playerInstance = new Player();

				expect(playerInstance.hand).toEqual([]);
			});
			it('is not busted', function () {
				playerInstance = new Player();

				expect(playerInstance.busted).toBe(false);
			});
		});

		describe('getHandValue', function () {
			beforeEach(function () {
				playerInstance = new Player();
			});

			it('returns 0 when the player\'s hand is empty', function () {
				var result;

				playerInstance.hand = [];
				result = playerInstance.getHandValue();

				expect(result).toEqual(0);
			});
			it('adds together all the cards in the player\'s hand', function () {
				var result;

				playerInstance.hand = [1, 2, 3];
				result = playerInstance.getHandValue();

				expect(result).toEqual(6);
			});
		});

		describe('isBusted', function () {
			beforeEach(function () {
				playerInstance = new Player();
				spyOn(playerInstance, 'getHandValue').and.returnValue(5);
			});

			describe('when the hand value is greater than 21', function () {
				beforeEach(function () {
					playerInstance.getHandValue.and.returnValue(22);
				})
				it('the player is busted when the hand value is greater than 21', function () {
					var result = playerInstance.isBusted();

					expect(result).toBe(true);
				});
			});
			it('the player is not busted if the hand value is less than 21', function () {
				var result = playerInstance.isBusted();

				expect(result).toBe(false);
			});
			it('the player stays busted once they have gone bust', function () {
				playerInstance.busted = true;
				playerInstance.isBusted();

				expect(playerInstance.busted).toBe(true);
			});
		});

		describe('hasBlackjack', function () {
			beforeEach(function () {
				playerInstance = new Player();
			});

			it('the player does not have a blackjack if they have no cards', function () {
				var result;

				playerInstance.hand = [];
				result = playerInstance.hasBlackjack();

				expect(result).toBe(false);
			});
			it('the player does not have a blackjack if they have more than 2 cards', function () {
				var result;

				playerInstance.hand = ['first card', 'second card', 'third card'];
				result = playerInstance.hasBlackjack();

				expect(result).toBe(false);
			});

			describe('when the player has 2 cards', function () {
				var firstCard,
					secondCard;

				beforeEach(function () {
					firstCard = {
						isAce: jasmine.createSpy().and.returnValue(false),
						isAFace: jasmine.createSpy().and.returnValue(false)
					};
					secondCard = {
						isAce: jasmine.createSpy().and.returnValue(false),
						isAFace: jasmine.createSpy().and.returnValue(false)
					};
					playerInstance.hand = [firstCard, secondCard];
				});

				it('is a blackjack when the first card is an ace and the second is a face card', function () {
					var result;

					firstCard.isAce.and.returnValue(true);
					secondCard.isAFace.and.returnValue(true);
					result = playerInstance.hasBlackjack();

					expect(result).toBe(true);
				});
				it('is a blackjack when the second card is an ace and the first is a face card', function () {
					var result;

					secondCard.isAce.and.returnValue(true);
					firstCard.isAFace.and.returnValue(true);
					result = playerInstance.hasBlackjack();

					expect(result).toBe(true);
				});
				it('is a not blackjack when neither card is a face card or an ace', function () {
					var result = playerInstance.hasBlackjack();

					expect(result).toBe(false);
				});
				it('is a not blackjack when both cards are aces', function () {
					var result;

					firstCard.isAce.and.returnValue(true);
					secondCard.isAce.and.returnValue(true);
					result = playerInstance.hasBlackjack();

					expect(result).toBe(false);
				});
				it('is a not blackjack when both cards are face cards', function () {
					var result;

					firstCard.isAFace.and.returnValue(true);
					secondCard.isAFace.and.returnValue(true);
					result = playerInstance.hasBlackjack();

					expect(result).toBe(false);
				});
			});
		});
	});
}());