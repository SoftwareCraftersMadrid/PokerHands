
var isRepeated = (element, list) => list.filter((item) => element.value === item.value).length == 2;

var hasNotCheckedBefore =
    (element, checkedElements) => checkedElements.filter(
        (checkedElement) => checkedElement.value === element.value
    ).length == 0;

function check(hand) {
    var checkedElements = [];
    hand.forEach(function (element, index, elements) {
        if(hasNotCheckedBefore(element, checkedElements) && isRepeated(element, elements))
            checkedElements.push(element);
    });
    return checkedElements.length == 2;
}

module.exports.check = check;