var hasAStraight = require('./straight').check;
var hasAFlush = require('./flush').check;
var HandType = require('../HandTypes');

function check(hand) {
    return hasAFlush(hand) && hasAStraight(hand);
}

module.exports.check = check;
module.exports.type = HandType.STRAIGHTFLUSH;