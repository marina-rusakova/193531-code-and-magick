'use strict';

window.utils = (function () {
  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var getRandomElementExcept = function (colors, currentColor) {
    var newColor = null;

    while (!newColor || newColor === currentColor) {
      newColor = getRandomElement(colors);
    }

    return newColor;
  };

  return {
    getRandomElementExcept: getRandomElementExcept

  };
})();


