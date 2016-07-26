var hasAStraight = require('./straight').check;
var hasAFlush = require('./flush').check;

function check(hand) {
    return hasAFlush(hand) && hasAStraight(hand);
}

module.exports.check = check;