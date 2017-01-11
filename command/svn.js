'use strict';

var util = require('util');
var spawn = require('child_process').spawn;

exports.name = 'svn tag [tag name]';
exports.desc = 'project automatically svn tag,eg: gfis svn tag 1.0.0';
exports.register = function(commander) {
    commander
        .action(function() {

        });
};
