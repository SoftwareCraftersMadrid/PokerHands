var pokerHandTypeChecker = require('../src/pockerHandTypeChecker');

function play(firstPlayer) {
    var self = this;
    self.firstPlayer = firstPlayer;
    return {
        versus: (secondPlayer) => {
            return "";
        }
    }
}

module.exports.play = play;