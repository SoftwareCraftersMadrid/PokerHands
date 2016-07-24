var weightOrder = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
function Card(value, suit) {
    var self = this;
    self.value = value;
    self.suit = suit;
    self.weigh = weightOrder[self.value];
    return {
        value: self.value,
        weigh: self.weigh,
        justValueEqual: function (otherCard) {
          return self.value == otherCard.value
        },
        asString: function () {
            return self.value + self.suit
        }

    }
}

module.exports = Card;
