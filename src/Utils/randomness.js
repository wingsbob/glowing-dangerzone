(function () {
	var randomnessMethods = {
		spliceArrayElement: function(array) {
			var randomIndex = Math.floor(Math.random() * array.length)

			return array.splice(randomIndex, 1)[0]
		}
	}

	module.exports = randomnessMethods;
}());