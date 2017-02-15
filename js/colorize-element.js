'use strict';

window.colorizeElement = (function () {
  var ENTER_KEY_CODE = 13;

  var isEnterPressed = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  return function (element, colors, property) {
    var currentColor = colors[0];

    var updateColor = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = currentColor;
    };

    element.addEventListener('click', function () {
      updateColor();
    });

    element.addEventListener('keyup', function (evt) {
      if (isEnterPressed(evt)) {
        element.setAttribute('aria-pressed', false);
        updateColor();
      }
    });

    element.addEventListener('keydown', function (evt) {
      if (isEnterPressed(evt)) {
        element.setAttribute('aria-pressed', true);
      }
    });
  };
})();
