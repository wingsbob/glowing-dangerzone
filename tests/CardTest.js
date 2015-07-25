(function () {
	'use strict';

	var Card = require('../src/Card'),
		cardInstance;

	describe('Card', function () {
		describe('constructor', function () {
			it('errors if the card type is below the valid range', function () {
				expect(function () {
					cardInstance = new Card(0);
				}).toThrow();
			});
			it('errors if the card type is above the valid range', function () {
				expect(function () {
					cardInstance = new Card(53);
				}).toThrow();
			});
			describe('the card value ', function () {
				describe('when the remainder from dividing by 13 is 1', function () {
					it('is 2', function () {
						cardInstance = new Card(1);

						expect(cardInstance.value).toEqual('2');
					});
					it('is a string', function () {
						cardInstance = new Card(1);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 2', function () {
					it('is 3', function () {
						cardInstance = new Card(2);

						expect(cardInstance.value).toEqual('3');
					});
					it('is a string', function () {
						cardInstance = new Card(2);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 3', function () {
					it('is 4', function () {
						cardInstance = new Card(3);

						expect(cardInstance.value).toEqual('4');
					});
					it('is a string', function () {
						cardInstance = new Card(3);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 4', function () {
					it('is 5', function () {
						cardInstance = new Card(4);

						expect(cardInstance.value).toEqual('5');
					});
					it('is a string', function () {
						cardInstance = new Card(4);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 5', function () {
					it('is 6', function () {
						cardInstance = new Card(5);

						expect(cardInstance.value).toEqual('6');
					});
					it('is a string', function () {
						cardInstance = new Card(5);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 6', function () {
					it('is 7', function () {
						cardInstance = new Card(6);

						expect(cardInstance.value).toEqual('7');
					});
					it('is a string', function () {
						cardInstance = new Card(6);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 7', function () {
					it('is 7', function () {
						cardInstance = new Card(7);

						expect(cardInstance.value).toEqual('8');
					});
					it('is a string', function () {
						cardInstance = new Card(7);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 8', function () {
					it('is 9', function () {
						cardInstance = new Card(8);

						expect(cardInstance.value).toEqual('9');
					});
					it('is a string', function () {
						cardInstance = new Card(8);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 9', function () {
					it('is 10', function () {
						cardInstance = new Card(9);

						expect(cardInstance.value).toEqual('10');
					});
					it('is a string', function () {
						cardInstance = new Card(9);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 10', function () {
					it('is J', function () {
						cardInstance = new Card(10);

						expect(cardInstance.value).toEqual('J');
					});
					it('is a string', function () {
						cardInstance = new Card(10);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 11', function () {
					it('is Q', function () {
						cardInstance = new Card(11);

						expect(cardInstance.value).toEqual('Q');
					});
					it('is a string', function () {
						cardInstance = new Card(11);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 12', function () {
					it('is K', function () {
						cardInstance = new Card(12);

						expect(cardInstance.value).toEqual('K');
					});
					it('is a string', function () {
						cardInstance = new Card(12);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
				describe('when the remainder from dividing by 13 is 0', function () {
					it('is A', function () {
						cardInstance = new Card(13);

						expect(cardInstance.value).toEqual('A');
					});
					it('is a string', function () {
						cardInstance = new Card(13);

						expect(cardInstance.value).toEqual(jasmine.any(String));
					});
				});
			});
			describe('the card suit', function () {
				describe('when the card is created with a type between 1 and 13', function () {
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(1);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(2);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(3);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(4);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(5);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(6);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(7);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(8);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(9);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(10);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(11);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(12);

						expect(cardInstance.suit).toEqual('Clubs');
					});
					it('the suit is "Clubs"', function () {
						cardInstance = new Card(13);

						expect(cardInstance.suit).toEqual('Clubs');
					});
				});
				describe('when the card is created with a type between 27 and 39', function () {	
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(14);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(15);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(16);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(17);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(18);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(19);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(20);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(21);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(22);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(23);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(24);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(25);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
					it('the suit is "Diamonds"', function () {
						cardInstance = new Card(26);

						expect(cardInstance.suit).toEqual('Diamonds');
					});
				});
				describe('when the card is created with a type between 27 and 39', function () {	
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(27);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(28);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(29);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(30);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(31);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(32);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(33);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(34);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(35);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(36);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(37);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(38);

						expect(cardInstance.suit).toEqual('Hearts');
					});
					it('the suit is "Hearts"', function () {
						cardInstance = new Card(39);

						expect(cardInstance.suit).toEqual('Hearts');
					});
				});
				describe('when the card is created with a type between 40 and 52', function () {	
					it('the suit is "Spades"', function () {
						cardInstance = new Card(40);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(41);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(42);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(43);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(44);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(45);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(46);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(47);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(48);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(49);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(50);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(51);

						expect(cardInstance.suit).toEqual('Spades');
					});
					it('the suit is "Spades"', function () {
						cardInstance = new Card(52);

						expect(cardInstance.suit).toEqual('Spades');
					});
				});
			});
		});

		describe('valueOf', function () {
			// body...
		});

		describe('goLow', function () {
			beforeEach(function () {
				cardInstance = new Card(1);
				cardInstance.isHigh = true;
			});

			it('sets that this card should be low if it is an ace', function () {
				cardInstance.goLow();

				expect(cardInstance.isHigh).toBe(false);
			});
		});

		describe('isAFace', function () {
			beforeEach(function () {
				cardInstance = new Card(1);
				cardInstance.value = '1';
			});

			describe('when the card has a numeric value', function () {
				it('is not a face card', function () {
					var result = cardInstance.isAFace();

					expect(result).toBe(false);
				});
			});
			it('when the card is a Jack, it is a face card', function () {
				var result;

				cardInstance.value = 'J';
				result = cardInstance.isAFace();

				expect(result).toBe(true);
			});
			it('when the card is a Queen, it is a face card', function () {
				var result;

				cardInstance.value = 'Q';
				result = cardInstance.isAFace();

				expect(result).toBe(true);
			});
			it('when the card is a King, it is a face card', function () {
				var result;

				cardInstance.value = 'K';
				result = cardInstance.isAFace();

				expect(result).toBe(true);
			});
			it('when the card is an Ace, it is not a face card', function () {
				var result;

				cardInstance.value = 'A';
				result = cardInstance.isAFace();

				expect(result).toBe(false);
			});
		});

		describe('isAce', function () {
			beforeEach(function () {
				cardInstance = new Card(1);
			});

			it('is an ace when the card value is Ace', function () {
				var result;

				cardInstance.value = 'A';
				result = cardInstance.isAce();

				expect(result).toBe(true);
			});
			it('is not an ace when the card value is not Ace', function () {
				var result;

				cardInstance.value = 'Q';
				result = cardInstance.isAce();

				expect(result).toBe(false);
			});
		});
	});
}());