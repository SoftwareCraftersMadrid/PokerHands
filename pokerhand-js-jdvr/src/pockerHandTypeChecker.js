var rules = require('./rules');

var descending = (leftRule, rightRule) => rightRule.type.weigh - leftRule.type.weigh;

var rulesThatAppliedTo = (hand) => (rule) => rule.check(hand);


function applyTo(hand) {

    return rules.filter(
        rulesThatAppliedTo(hand)
    ).sort(
        descending
    )[0].type;
}

function check(hand) {
    return applyTo(hand);
}

module.exports.check = check;
