'use strict';

var GFXImage = require('../../../src/utils/GFXImage');

function Main() {
  var carImageElement = document.querySelector('.big-image');
  var carImage = GFXImage.create(carImageElement, init);
  carImage.zoomBlur.enabled = true;
  carImage.brightnessContrast.enabled = true;
  carImage.lensBlur.enabled = true;

  carImage.zoomBlur.strength = 1;
  carImage.zoomBlur.centerX = 760;
  carImage.zoomBlur.centerY = 360;

  carImage.brightnessContrast.brightness = 0.58;
  carImage.brightnessContrast.contrast = 0.78;

  carImage.lensBlur.radius = 0;
  carImage.lensBlur.brightness = 1;
  carImage.lensBlur.angle = 0.66841;

  function init(){
    TweenMax.set('.car-container', {transformOrigin: 'top left', rotate:0.01, scale: 4, x:-2580, y:-1325});
    TweenMax.to('.car-container', 1.1, {scale: 1, x:-440, y:-230, ease:Power4.easeOut});
    
    TweenMax.to(carImage.brightnessContrast, 1.7, {brightness: 0, contrast:0});
    TweenMax.to(carImage.zoomBlur, 1.2, {strength: 0, ease:Power2.easeOut });
    TweenMax.to(carImage.lensBlur, 0.7, {delay:0.1, radius: 8});
    TweenMax.to(carImage.lensBlur, 1, {delay:1, radius: 0, ease:Power2.easeInOut});
  }
}

var main = new Main();