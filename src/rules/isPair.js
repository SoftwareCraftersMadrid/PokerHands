var handOperations = require('./handOperations');

var isTwice = (element, list) => handOperations.isRepeated(element, list, 2);

var hasNotCheckedBefore = (element, checkedElements) => handOperations.notContains(element, checkedElements);

function check(hand) {
    var checkedElements = [];
    hand.forEach(function (element, index, elements) {
        if(hasNotCheckedBefore(element, checkedElements) && isTwice(element, elements))
            checkedElements.push(element);
    });
    return checkedElements.length == 1;
}

module.exports.check = check;