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

var descending = (leftRule, rightRule) => rules.indexOf(rightRule) - rules.indexOf(leftRule);

var rulesThatAppliedTo = (hand) => (rule) => rule.check(hand);


function applyTo(hand) {

    return rules.filter(
        rulesThatAppliedTo(hand)
    ).sort(
        descending
    )[0].type;
}

module.exports.applyTo = applyTo;
