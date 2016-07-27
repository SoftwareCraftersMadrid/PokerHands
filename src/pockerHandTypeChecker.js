var HandType = require('./HandTypes');
var Card = require('../src/card');
function check(hand) {
    return HandType.HIGHCARD;
}

module.exports.check = check;
