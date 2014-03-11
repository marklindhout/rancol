# rancol - A random color generator

A simple Node.js module for the generation of random color codes in HEX, RGB(A), HSL(A) and keyword format.

## Usage


### HEX colors

```javascript
var rancol = require('rancol');

console.log( rancol.hex() );
```

### RGB(A) colors

RGB colors have two formats, one is a numeric representation of an 8-bit channel (0-255) and the other one is percentual (0-100). Transparency is provided through the alpha channel (0.0 - 1.0).

```javascript
rancol.rgb()     // "rgb(2, 172, 55);"
rancol.rgba()    // "rgba(244, 175, 148, 0.6);"
rancol.rgbp()    // "rgb(82%, 3%, 34%);"
rancol.rgbpa()   // "rgba(46%, 21%, 57%, 0.0);"
```

### HSL(A) colors

```javascript
rancol.hsl()     // "hsl(18, 38%, 96%);"
rancol.hsla()    // "hsla(114, 17%, 90%, 0.7);"
```

### Keyword colors

The CSS specification allows some colours to be named with a keyword, and rancol offers the possibiltiy to use these keywords for random color generation.

Rancol supports the complete list of basic and extednded color keywords that can be found here: http://www.w3.org/wiki/CSS/Properties/color/keywords

```javascript
rancol.keyword()  // "maroon"
```

## Command line usage

Rancol can also be used from the command line. The flags are named after the functions. Running it without any flags gives you a HEX color value. Valid examples of running rancol are:

```sh
$ rancol --rgba
# rgba(201, 244, 125, 0.7);

$ rancol --keyword
# maroon

$ rancol
# #AF67D9
```
