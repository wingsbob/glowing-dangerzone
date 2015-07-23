(function () {
	'use strict';

	var proxyquire = require('proxyquire'),
		fakeCard = jasmine.createSpy(),
		fakeRandom = {},
		Deck = proxyquire('../src/Deck', {
			'./Card': fakeCard,
			'./Utils/randomness': fakeRandom,
			'@noCallThru': true
		}),
		deckInstance;

	describe('Deck', function () {
		beforeEach(function () {
			fakeCard.calls.reset();
		});

		describe('constructor', function () {
			it('has an empty collection of cards', function () {
				deckInstance = new Deck();

				expect(deckInstance.cards).toEqual([]);
			});
		});

		describe('init', function () {
			beforeEach(function () {
				deckInstance = new Deck();
				spyOn(deckInstance, 'shuffle');
			});

			it('creates a full deck of cards', function () {
				var cardsInADeck = 52;

				deckInstance.init();

				expect(fakeCard.calls.count()).toEqual(cardsInADeck);
			});
			it('stores all the cards in the cards collection', function () {
				var cardsInADeck = 52;

				deckInstance.init();

				expect(deckInstance.cards.length).toEqual(cardsInADeck);
			});
			describe('it creates each card with a different value', function () {
				it('creates the first card with value 1 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(0)).toEqual([1]);
				});
				it('creates the second card with value 2 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(1)).toEqual([2]);
				});
				it('creates the third card with value 3 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(2)).toEqual([3]);
				});
				it('creates the fourth card with value 4 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(3)).toEqual([4]);
				});
				it('creates the fifth card with value 5 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(4)).toEqual([5]);
				});
				it('creates the sixth card with value 6 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(5)).toEqual([6]);
				});
				it('creates the seventh card with value 7 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(6)).toEqual([7]);
				});
				it('creates the eighth card with value 8 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(7)).toEqual([8]);
				});
				it('creates the ninth card with value 9 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(8)).toEqual([9]);
				});
				it('creates the tenth card with value 10 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(9)).toEqual([10]);
				});
				it('creates the eleventh card with value 11 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(10)).toEqual([11]);
				});
				it('creates the twelfth card with value 12 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(11)).toEqual([12]);
				});
				it('creates the thirteenth card with value 13 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(12)).toEqual([13]);
				});
				it('creates the fourteenth card with value 14 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(13)).toEqual([14]);
				});
				it('creates the fifteenth card with value 15 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(14)).toEqual([15]);
				});
				it('creates the sixteenth card with value 16 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(15)).toEqual([16]);
				});
				it('creates the seventeenth card with value 17 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(16)).toEqual([17]);
				});
				it('creates the eighteenth card with value 18 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(17)).toEqual([18]);
				});
				it('creates the ninteenth card with value 19 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(18)).toEqual([19]);
				});
				it('creates the twentyth card with value 20 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(19)).toEqual([20]);
				});
				it('creates the twenth first card with value 21 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(20)).toEqual([21]);
				});
				it('creates the twenty second card with value 22 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(21)).toEqual([22]);
				});
				it('creates the twenty third card with value 23 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(22)).toEqual([23]);
				});
				it('creates the twenty fourth card with value 24 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(23)).toEqual([24]);
				});
				it('creates the twenty fifth card with value 25 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(24)).toEqual([25]);
				});
				it('creates the twenty sixth card with value 26 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(25)).toEqual([26]);
				});
				it('creates the twenty seventh card with value 27 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(26)).toEqual([27]);
				});
				it('creates the twenty eighth card with value 28 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(27)).toEqual([28]);
				});
				it('creates the twenty ninth card with value 29 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(28)).toEqual([29]);
				});
				it('creates the thirtyth card with value 30 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(29)).toEqual([30]);
				});
				it('creates the thirty first card with value 31 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(30)).toEqual([31]);
				});
				it('creates the thirty second card with value 32 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(31)).toEqual([32]);
				});
				it('creates the thirty third card with value 33 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(32)).toEqual([33]);
				});
				it('creates the thirty forth card with value 34 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(33)).toEqual([34]);
				});
				it('creates the thirty fifth card with value 35 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(34)).toEqual([35]);
				});
				it('creates the thirty sixth card with value 36 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(35)).toEqual([36]);
				});
				it('creates the thirty seventh card with value 37 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(36)).toEqual([37]);
				});
				it('creates the thirty eigth card with value 38 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(37)).toEqual([38]);
				});
				it('creates the thirty ninth card with value 39 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(38)).toEqual([39]);
				});
				it('creates the fortyth card with value 40 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(39)).toEqual([40]);
				});
				it('creates the forty first card with value 41 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(40)).toEqual([41]);
				});
				it('creates the forty second card with value 42 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(41)).toEqual([42]);
				});
				it('creates the forty third card with value 43 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(42)).toEqual([43]);
				});
				it('creates the forty fourth card with value 44 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(43)).toEqual([44]);
				});
				it('creates the forty fifth card with value 45 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(44)).toEqual([45]);
				});
				it('creates the forty sixth card with value 46 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(45)).toEqual([46]);
				});
				it('creates the forty seventh card with value 47 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(46)).toEqual([47]);
				});
				it('creates the forty eighth card with value 48 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(47)).toEqual([48]);
				});
				it('creates the forty ninth card with value 49 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(48)).toEqual([49]);
				});
				it('creates the fiftyth card with value 50 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(49)).toEqual([50]);
				});
				it('creates the fifty first card with value 51 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(50)).toEqual([51]);
				});
				it('creates the fifty second card with value 52 ', function () {
					deckInstance.init();

					expect(fakeCard.calls.argsFor(51)).toEqual([52]);
				});
			});
			it('shuffles the deck', function () {
				deckInstance.init();

				expect(deckInstance.shuffle).toHaveBeenCalled();
			});
		});

		describe('shuffle', function () {
			var firstCard = {},
				secondCard = {},
				thirdCard = {};

			beforeEach(function () {
				deckInstance = new Deck();
				deckInstance.cards = [firstCard, secondCard, thirdCard];
				fakeRandom.spliceArrayElement = jasmine.createSpy().and.callFake(function (array) {
					array.splice(0, 1);
				});
			});
			afterEach(function () {
				delete fakeRandom.spliceArrayElement;
			});

			it('keeps selecting a card at random until there are no more cards', function () {
				deckInstance.shuffle();

				expect(fakeRandom.spliceArrayElement.calls.count()).toEqual(3);
			});
		});

		describe('draw', function () {
			beforeEach(function () {
				deckInstance = new Deck();
				deckInstance.cards = ['first card', 'second card'];
			});

			it('returns the first card', function () {
				var result = deckInstance.draw();

				expect(result).toEqual('second card');
			});
		});
	});
}());