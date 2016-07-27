var handOperations = require('./handOperations');
var HandType = require('../HandTypes');

function check(hand) {
    var suitOnHans = hand.map((card) => card.suit);
    return suitOnHans.filter((item) => suitOnHans[0] === item ).length == 5;
}

module.exports.check = check;
module.exports.type = HandType.FLUSH;