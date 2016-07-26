var handOperations = require('./handOperations');

var isThreeTimes = (element, list) => handOperations.isRepeated(element, list, 4);

var hasNotCheckedBefore = (element, checkedElements) => handOperations.notContains(element, checkedElements);

function check(hand) {
    var checkedElements = [];
    hand.forEach(function (element, index, elements) {
        if(hasNotCheckedBefore(element, checkedElements) && isThreeTimes(element, elements))
            checkedElements.push(element);
    });
    return checkedElements.length == 1;
}


module.exports.check = check;