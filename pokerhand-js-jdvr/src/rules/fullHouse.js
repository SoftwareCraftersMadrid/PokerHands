var hasAPair = require('./isPair').check;
var hasAThree = require('./threeOfAKind').check;
var HandType = require('../HandTypes');

function check(hand) {
    return hasAPair(hand) && hasAThree(hand);
}

module.exports.check = check;
module.exports.type = HandType.FULLHOUSE;