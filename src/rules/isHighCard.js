var HandType = require('../HandTypes');


function check(hand) {
    return true;
}

module.exports.check = check;
module.exports.type = HandType.HIGHCARD;