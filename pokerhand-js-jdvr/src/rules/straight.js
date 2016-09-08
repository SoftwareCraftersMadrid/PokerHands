var handOperations = require('./handOperations');
var HandType = require('../HandTypes');

function check(hand) {
    var consecutiveCount = 0;
    var sortedHand  = handOperations.sortAscendByWeigh(hand);
    for(var i =1; i < sortedHand.length; i++){
        if(sortedHand[i - 1].weigh == (sortedHand[i].weigh - 1))
            consecutiveCount++;

    }
    return consecutiveCount == sortedHand.length - 1;
}

module.exports.check = check;
module.exports.type = HandType.STRAIGHT;