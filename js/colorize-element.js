'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  var ENTER_KEY_CODE = 13;

  var isEnterPressed = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  element.addEventListener('click', function () {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);

    currentColor = newColor;
    element.style[property] = currentColor;
  });

  element.addEventListener('keyup', function (evt) {
    if (isEnterPressed(evt)) {
      element.setAttribute('aria-pressed', false);

      var newColor = window.utils.getRandomElementExcept(colors, currentColor);

      currentColor = newColor;
      element.style[property] = currentColor;
    }
  });

  element.addEventListener('keydown', function (evt) {
    if (isEnterPressed(evt)) {
      element.setAttribute('aria-pressed', true);
    }
  });
};
