var highCardRule = require('./isHighCard');
var pairRule = require('./isPair');
var twoPairRule = require('./twoPairs');
var threeOfAKind = require('./threeOfAKind');
var straight = require('./straight');
var flush = require('./flush');
var fullHouse = require('./fullHouse');
var fourOfAKind = require('./fourOfAKind');
var straightFlush = require('./straightFlush');

var rules = [
    highCardRule,
    pairRule,
    twoPairRule,
    threeOfAKind,
    straight,
    flush,
    fullHouse,
    fourOfAKind,
    straightFlush
] ;

function applyTo(hand) {
    var passedRules = rules.filter(
        (rule) => rule.check(hand)
    );

    var sortedPassedRules = passedRules.sort(
        (leftRule, rightRule) => rules.indexOf(rightRule) - rules.indexOf(leftRule)
    );

    return sortedPassedRules[0].type;
}

module.exports.applyTo = applyTo;
