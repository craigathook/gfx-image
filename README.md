# GFX Image - Easy access to realtime shader effects on images using the GLFX library.

# Usage

GFX Image takes a reference to an HTML element, or a selector string and replaces it with an image within a WebGL canvas element. Returns a reference to a GFXImage Element. 

    var gfxImage = GFXImage.create('#imageElement', callback);

With your GFXImage Element reference, enable filters by settings the appropriate 
    gfxImage.lensBlur.enabled = true;


# Methods

**GFXImage.create** ( target, callback )
 > Loads the given image into a WebGL enabled canvas element.
 
 > **target** - Selector string or reference to Image HTMLElement.

 > **callback** - Fires when GFXImage element is ready to be displayed.

# GFXImage Element filter properties

GFXImage Element is an object that contains some useful properties:

**lib** _Object_
 > An object containing references to all MovieClips used in the animation. This is similar to the library in the Animate/Flash IDE, but excludes things that arent used in the final animation.

**root** _Container_
 > The root MovieClip of the animation.

**width** _Number_
 > The width of the animation.

**height** _Number_
 > The height of the animation.

**fps** _Number_
 > The frames per second of the animation.

**backgroundColor** _Hexadecimal_
 > The background color of the animation.


      denoise
      noise
      sepia
      vibrance
      triangleBlur
      edgeWork
      ink
      brightnessContrast
      curves
      hueSaturation
      unsharpMask
      vignette
      lensBlur
      tiltShift
      zoomBlur
      colorHalftone
      dotScreen
      hexagonalPixelate
      bulgePinch
      matrixWarp
      perspective
      swirl