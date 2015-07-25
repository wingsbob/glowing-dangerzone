(function () {
	'use strict';

	var Player = require('./Player');


	function Dealer() {
		Player.call(this);
	}

	Dealer.prototype = Object.create(Player.prototype);

}());