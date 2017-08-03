(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var GFXImage = require('./utils/GFXImage');

window.GFXImage = GFXImage;
},{"./utils/GFXImage":2}],2:[function(require,module,exports){
function GFXImage(){
  var api = {
    elements: []
  }
  
  api.create = function(src, callback){
    if(!callback) callback = function(){};
    
    try {
      var canvas = fx.canvas();
    } catch (e) {
      alert(e);
      return;
    }

    var image;
    
    if(src instanceof HTMLElement) {
      image = src;
    } else if (typeof src == 'string') {
      image = document.querySelector(src);
      image.crossOrigin = '';
      image.src = image.src+'?loaded';
    }
    
    //element.image = image;
    var element = api.createElement();
    
    function checkImage(){
      if(image.complete && image.naturalHeight !== 0) {
        var texture = canvas.texture(image);

        // replace the image with the canvas
        image.parentNode.insertBefore(canvas, image);
        image.parentNode.removeChild(image);
        element.texture = texture;
        element.canvas = canvas;
        api.elements.push(element);
        window.requestAnimationFrame(function(){
          element.onload();
          callback();
        });
      } else {
        window.requestAnimationFrame(checkImage);
      }
    }
    
    checkImage();
    
    return element;
  }
  
  api.createElement = function(){
    var element = {
      denoise: { enabled: false },
      noise: { enabled: false },
      sepia: { enabled: false },
      vibrance: { enabled: false },
      triangleBlur: { enabled: false },
      edgeWork: { enabled: false },
      ink: { enabled: false },
      brightnessContrast: { enabled: false },
      curves: { enabled: false },
      hueSaturation: { enabled: false },
      unsharpMask: { enabled: false },
      vignette: { enabled: false },
      lensBlur: { enabled: false },
      tiltShift: { enabled: false },
      zoomBlur: { enabled: false },
      colorHalftone: { enabled: false },
      dotScreen: { enabled: false },
      hexagonalPixelate: { enabled: false },
      bulgePinch: { enabled: false },
      matrixWarp: { enabled: false },
      perspective: { enabled: false },
      swirl: { enabled: false }
    };
    element.onload = function(){};
    //api.elements.push(element);
    
    return element;
  }
  
  api.update = function(){
    try {
      for(var e in elements){
        var element = elements[e];
        var canvas = element.canvas;
        var texture = element.texture;

        var drawInstance = canvas.draw(texture);

        if(element['denoise'].enabled)                  drawInstance.denoise            (element['denoise'].exponent)
        if(element['noise'].enabled)                    drawInstance.noise              (element['noise'].amount)
        if(element['sepia'].enabled)                    drawInstance.sepia              (element['sepia'].amount)
        if(element['vibrance'].enabled)                 drawInstance.vibrance           (element['vibrance'].amount)
        if(element['triangleBlur'].enabled)             drawInstance.triangleBlur       (element['triangleBlur'].radius)
        if(element['edgeWork'].enabled)                 drawInstance.edgeWork           (element['edgeWork'].radius)
        if(element['ink'].enabled)                      drawInstance.ink                (element['ink'].strength)
        if(element['brightnessContrast'].enabled)       drawInstance.brightnessContrast (element['brightnessContrast'].brightness, element['brightnessContrast'].contrast)
        if(element['curves'].enabled)                   drawInstance.curves             (element['curves'].red, element['curves'].green, element['curves'].blue)
        if(element['hueSaturation'].enabled)            drawInstance.hueSaturation      (element['hueSaturation'].hue, element['hueSaturation'].saturation)
        if(element['unsharpMask'].enabled)              drawInstance.unsharpMask        (element['unsharpMask'].radius, element['unsharpMask'].strength)
        if(element['vignette'].enabled)                 drawInstance.vignette           (element['vignette'].size, element['vignette'].amount)
        if(element['lensBlur'].enabled)                 drawInstance.lensBlur           (element['lensBlur'].radius, element['lensBlur'].brightness, element['lensBlur'].angle)
        if(element['tiltShift'].enabled)                drawInstance.tiltShift          (element['tiltShift'].startX, element['tiltShift'].startY, element['tiltShift'].endX, element['tiltShift'].endY, element['tiltShift'].blurRadius, element['tiltShift'].gradientRadius)
        if(element['zoomBlur'].enabled)                 drawInstance.zoomBlur           (element['zoomBlur'].centerX, element['zoomBlur'].centerY, element['zoomBlur'].strength)
        if(element['colorHalftone'].enabled)            drawInstance.colorHalftone      (element['colorHalftone'].centerX, element['colorHalftone'].centerY, element['colorHalftone'].angle, element['colorHalftone'].size)
        if(element['dotScreen'].enabled)                drawInstance.dotScreen          (element['dotScreen'].centerX, element['dotScreen'].centerY, element['dotScreen'].angle, element['dotScreen'].size)
        if(element['hexagonalPixelate'].enabled)        drawInstance.hexagonalPixelate  (element['hexagonalPixelate'].centerX, element['hexagonalPixelate'].centerY, element[element.filter].scale)
        if(element['bulgePinch'].enabled)               drawInstance.bulgePinch         (element['bulgePinch'].centerX, element['bulgePinch'].centerY, element['bulgePinch'].radius, element['bulgePinch'].strength)
        if(element['matrixWarp'].enabled)               drawInstance.matrixWarp         (element['matrixWarp'].matrix, element['matrixWarp'].inverse, element['matrixWarp'].useTextureSpace)
        if(element['perspective'].enabled)              drawInstance.perspective        (element['perspective'].before, element['perspective'].after)
        if(element['swirl'].enabled)                    drawInstance.swirl              (element['swirl'].centerX, element['swirl'].centerY, element['swirl'].radius, element['swirl'].angle)

        drawInstance.update();
        
      }
    } catch(e) {
      console.log(e);
    }
    window.canvas = canvas;
    window.requestAnimationFrame(api.update);
  }
  
  window.requestAnimationFrame(api.update);
  
  window.elements = api.elements;
  
  return api;
  
}

module.exports = GFXImage();
},{}]},{},[1])

//# sourceMappingURL=gfx-image.js.map
