'use strict';

var initWizardCustomizationWindow = function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isEnterPressed = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  }

  var showSetupWindow = function() {
    setup.classList.remove('invisible');

    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESCAPE_KEY_CODE) {
        setup.classList.add('invisible');
      }
    });
  };

  var hideSetupWindow = function() {
    setup.classList.add('invisible');
  };

  setupOpen.addEventListener('click', function () {
    showSetupWindow();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (isEnterPressed(evt)) {
      showSetupWindow();
    }
  });

  setupClose.addEventListener('click', function () {
    hideSetupWindow();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (isEnterPressed(evt)) {
      hideSetupWindow();
    }
  });

  setupSubmit.addEventListener('keydown', function (evt) {
    if (isEnterPressed(evt)) {
      hideSetupWindow();
    }
  });

  var wizard = document.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  wizardCoat.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
    wizardCoat.style.fill = wizardCoatColors[colorNumber];
  });

  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  wizardEyes.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
    wizardEyes.style.fill = wizardEyesColors[colorNumber];
  });

  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  fireball.addEventListener('click', function () {
    var colorNumber = Math.floor(Math.random() * fireballColors.length);
    fireball.style.background = fireballColors[colorNumber];
  });
};


initWizardCustomizationWindow();
