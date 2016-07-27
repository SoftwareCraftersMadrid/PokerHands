var rules = require('./rules');

function check(hand) {
    return rules.applyTo(hand);
}

module.exports.check = check;
