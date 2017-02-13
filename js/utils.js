'use strict';

window.utils = {
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  },

  getRandomElementExcept: function (elements, exceptValue) {
    var newValue = null;

    var filteredElements = elements.filter(function (e) {
      return e !== exceptValue;
    });

    if (filteredElements.length !== 0 ) {
      newValue = utils.getRandomElement(filteredElements);
    } else {
      newValue = exceptValue;
    }

    return newValue;
  }
};
