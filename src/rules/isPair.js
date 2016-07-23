function check(hand) {
    var firstCard = hand[0];
    var sameValueCads = hand.slice(1).filter((element) => element.justValueEqual(firstCard));
    return sameValueCads.length > 0;
}

module.exports.check = check;