function check(hand) {
    var firstCard = hand[0];
    var sameValueCards = (element) => element.justValueEqual(firstCard);
    return hand.slice(1).filter(sameValueCards).length > 0;
}

module.exports.check = check;