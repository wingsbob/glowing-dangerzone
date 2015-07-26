(function () {
	'use strict';

	var Deck = require('./Deck'),
		Dealer = require('./Dealer');

	function Game() {
		this.deck = null;
		this.players = [];
		this.dealer = null;
	}

	Game.prototype.addPlayer = function(player) {
		var self = this;

		player.on('busted', function () {
			self.removePlayer(player);
		})
		this.players.push(player);
	};

	Game.prototype.removePlayer = function(player) {
		var playerIndex = this.players.indexOf(player);

		if (playerIndex > -1) {
			this.players.splice(playerIndex, 1);
		}
	};

	Game.prototype.start = function() {
		this.deck = this.deck || new Deck();

	};

	module.exports = Game();

}());