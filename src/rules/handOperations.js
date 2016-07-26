var isRepeated = (element, list, count) => list.filter((item) => element.value === item.value).length == count;

var notContains =
    (element, checkedElements) => checkedElements.filter(
        (checkedElement) => checkedElement.value === element.value
    ).length == 0;

module.exports = {
    isRepeated: isRepeated,
    notContains: notContains
} ;
