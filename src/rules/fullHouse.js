var hasAPair = require('./isPair').check;
var hasAThree = require('./threeOfAKind').check;

function check(hand) {
    return hasAPair(hand) && hasAThree(hand);
}

module.exports.check = check;