# GFX Image - Easy access to realtime shader effects on images using the GLFX library.

# Usage

GFX Image takes a reference to an HTML element, or a selector string and replaces it with an image within a WebGL canvas element. Returns a reference to a GFXImage Element. 

    var gfxImage = GFXImage.('#imageElement', callback);

# Methods

**GFXImage.create** ( target, callback )
 > Loads the given image into a WebGL enabled canvas element.
 
 > **target** - Selector string or reference to Image HTMLElement.

 > **callback** - Fires when GFXImage element is fully loadeda and ready to be displayed.

# GFXImage Element

GFXImage Element contains references to these filters, which have their own properties that can be set.

With your GFXImage Element reference, enable filters by setting the appropriate filter's "enabled" property to _true_.
    
    gfxImage.lensBlur.enabled = true;

Then, once the filter is enabled, you can set the filter's properties like this:
    
    gfxImage.lensBlur.radius = 0;
    gfxImage.lensBlur.brightness = 1;
    gfxImage.lensBlur.angle = 0.66841;

# List of supported filter properties

These properties are all derived from the GLFX library. Find examples and more detailed documentation on these filters here: http://evanw.github.io/glfx.js/demo/

Example usage:

    gfxImageElement.<FILTER_NAME>.<FILTER_PROPERTY>

Filter Properties:

**denoise**
 > exponent
 
**noise**
 > amount
 
**sepia**
 > amount
 
**vibrance**
 > amount
 
**triangleBlur**
 > radius
 
**edgeWork**
 > radius
 
**ink**
 > strength
 
**brightnessContrast**
 > brightness
 > 
 > contrast
 
**curves**
 > red
 > 
 > green
 > 
 > blue
 
**hueSaturation**
 > hue
 > saturation
 
**unsharpMask**
 > radius
 > 
 > strength
 
**vignette**
 > size
 > 
 > amount
 
**lensBlur**
 > radius
 > 
 > brightness
 > 
 > angle
 
**tiltShift**
 > startX
 
 > startY
 
 > endX
 
 > endY
 
 > blurRadius
 
 > gradientRadius
 
 
**zoomBlur**
 > centerX
 
 > centerY
 
 > strength
 
 
**colorHalftone**
 > centerX
 
 > centerY
 
 > angle
 
 > size
 
**dotScreen**
 > centerX
 
 > centerY
 
 > angle
 
 > size
 
**hexagonalPixelate**
 > centerX
 
 > centerY
 
 > lter
 
**bulgePinch**
 > centerX
 
 > centerY
 
 > radius
 
 > strength
 
**matrixWarp**
 > matrix
 
 > inverse
 
 > useTextureSpace
 
**perspective**
 > before
 
 > after
 
**swirl**
 > centerX
 
 > centerY
 
 > radius
 
 > angle