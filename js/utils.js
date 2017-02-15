'use strict';

window.utils = (function () {
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var getRandomElementExcept = function (elements, exceptValue) {
    var newValue = null;

    var filteredElements = elements.filter(function (e) {
      return e !== exceptValue;
    });

    if (filteredElements.length !== 0) {
      newValue = window.utils.getRandomElement(filteredElements);
    } else {
      newValue = null;
    }

    return newValue;
  };

  return {
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept
  };
})();
