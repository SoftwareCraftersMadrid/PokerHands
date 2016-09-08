var _ = require('lodash');
var HandType = require('../HandTypes');

function check(hand) {
    var groupedByValue = _.groupBy(hand, (card) => card.value);
    var foundValues = _.filter(groupedByValue, (value) => value.length == 4);
    return foundValues.length == 1;
}


module.exports.check = check;
module.exports.type = HandType.FOUROFAKIND;