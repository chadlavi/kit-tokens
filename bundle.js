(function () {
    'use strict';

    Object.defineProperty(exports, "__esModule", { value: true });
    exports.spacing = exports.color = void 0;
    var color_1 = require("./color");
    Object.defineProperty(exports, "color", { enumerable: true, get: function () { return color_1.color; } });
    var spacing_1 = require("./spacing");
    Object.defineProperty(exports, "spacing", { enumerable: true, get: function () { return spacing_1.spacing; } });
    var theme = {
        color: color_1.color,
        spacing: spacing_1.spacing
    };
    exports.default = theme;

}());
