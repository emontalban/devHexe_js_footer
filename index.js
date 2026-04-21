
'use strict';

var moment = require('moment');

/**
 * Returns a string element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "\u00A9 " + moment().format('YYYY') + " " + name + " All rights reserved";
};
console.log(exports.footer("Hexe"));