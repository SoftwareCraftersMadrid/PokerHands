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


module.exports = rules;
