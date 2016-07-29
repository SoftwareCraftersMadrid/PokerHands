var pokerHandTypeChecker = require('../src/pockerHandTypeChecker');

var evaluator = function (play){
    if(play.firstPlayerHandType.weigh > play.secondPlayerHandType.weigh) {
        return {
            name: play.firstPlayer.name,
            handType: play.firstPlayerHandType.name
        }
    }
};


var printer = function (winner) {
  return winner.name + " wins. - with " + winner.handType
};

function play(firstPlayer) {
    var self = this;
    self.firstPlayer = firstPlayer;
    self.firstPlayerHandType = pokerHandTypeChecker.check(firstPlayer.hand);
    return {
        versus: (secondPlayer) => {
            self.secondPlayer = secondPlayer;
            self.secondPlayerHandType = pokerHandTypeChecker.check(secondPlayer.hand);
            var winner = evaluator(self);
            return printer(winner);
        }
    }
}

module.exports.play = play;