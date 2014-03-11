// strict mode
'use strict';

// Taken from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
var decimalAdjust = function (type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};

// Generate an 8-bit RGB value (between 0 and 255)
var rgb_particle = function() {
    var bitdepth =  1<<8; // 8 bits per color
    return Math.floor( Math.random() * bitdepth);
};

// Generate an alpha value (between 0 and 1)
var alpha_particle = function () {
    var output = decimalAdjust('round', Math.random(), -1);
    if (output === 1 || output === 0) {
        output = output + '.0'; // Pad the result for looksies
    }
    return output;
};

// Generate a percentual value (between 0 and 100)
var percent_particle = function() {
    return Math.floor( Math.random() * 100) + '%';
};

// Generate a degree value (between 0 and 360)
var degree_particle = function() {
    return Math.floor( Math.random() * 360);
};


// Base function for RGB color generation
var gen_rgb_color = function (show_alpha) {
    var r = rgb_particle();
    var g = rgb_particle();
    var b = rgb_particle();
    var a = alpha_particle();

    if (show_alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ');';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ');';
    }
};

// Base function for percentual color generation
var gen_percentage_color = function (show_alpha) {
    var r = percent_particle();
    var g = percent_particle();
    var b = percent_particle();
    var a = alpha_particle();

    if (show_alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ');';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ');';
    }
};

// Base function for HSL color generation
var gen_hsl_color = function (show_alpha) {
    var h = degree_particle();
    var s = percent_particle();
    var l = percent_particle();
    var a = alpha_particle();

    if (show_alpha) {
        return 'hsla(' + h + ', ' + s + ', ' + l + ', ' + a + ');';
    } else {
        return 'hsl(' + h + ', ' + s + ', ' + l + ');';
    }
};

// HEX
var random_hex_color = function () {
    var cl = '#', c = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 6; i ++) {
        cl += c[ Math.floor( Math.random() * c.length) ];
    }
    return cl;
};

// RGB
var random_rgb_color = function () {
    return gen_rgb_color(false);
};

// RGBA
var random_rgba_color = function () {
    return gen_rgb_color(true);
};

// RGBP
var random_rgb_percentage_color = function () {
    return gen_percentage_color(false);
};

// RGBPA
var random_rgba_percentage_color = function () {
    return gen_percentage_color(true);
};

// HSL
var random_hsl_color = function () {
    return gen_hsl_color(false);
};

// HSLA
var random_hsla_color = function () {
    return gen_hsl_color(true);
};

//  Keyword
var random_keyword_color = function () {
    var keywords = ["aliceblue", "antiquewhite", "aqua", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "black", "blanchedalmond", "blue", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "gray", "green", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "lime", "limegreen", "linen", "magenta", "maroon", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "navy", "oldlace", "olive", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "purple", "red", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "white", "whitesmoke", "yellow", "yellow", "yellowgreen"];
    var index = Math.floor( Math.random() * keywords.length);

    return keywords[index];
};

// node module exports
exports.hex     = random_hex_color;
exports.rgb     = random_rgb_color;
exports.rgbp    = random_rgb_percentage_color;
exports.rgba    = random_rgba_color;
exports.rgbpa   = random_rgba_percentage_color;
exports.hsl     = random_hsl_color;
exports.hsla    = random_hsla_color;
exports.keyword = random_keyword_color;