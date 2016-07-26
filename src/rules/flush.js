var handOperations = require('./handOperations');


function check(hand) {
    var suitOnHans = hand.map((card) => card.suit);
    return suitOnHans.filter((item) => suitOnHans[0] === item ).length == 5;
}

module.exports.check = check;