'use strict';

exports.name = 'npm [npm command]';
exports.desc = 'in the release directory execute npm command,eg: gfis npm run dev';
exports.register = function(commander) {
    commander
        .action(function() {

        });
};
