function Card(value, suit) {
    var self = this;
    self.value = value;
    self.suit = suit;
    return {
        value: function () {
            return self.value;
        },
        justValueEqual: function (otherCard) {
          return self.value === otherCard.value
        },
        asString: function () {
            return self.value + self.suit
        }

    }
}

module.exports = Card;
