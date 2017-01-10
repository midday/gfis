'use strict';

var path = require('path');
var defaults = require('../config/defaults.js');

exports.name = 'init';
exports.desc = 'project directory init';
exports.register = function(commander) {
    commander.action(function() {
        var projectName = 'gfe-init';
        var waitOutputFolders = ['data', 'js', 'css/i', 'html'];
        var waitOutputFile = 'gfe-config.json';
        var configFilePath = path.join(process.cwd(), projectName, waitOutputFile).replace(/\\/g, '/');

        //输出文件夹
        waitOutputFolders.forEach(function(folder) {
            var folderPath = path.join(process.cwd(), projectName, folder).replace(/\\/g, '/');
            fis.util.mkdir(folderPath);
        });
        
        //输出配置文件
        fis.util.write(configFilePath, JSON.stringify(defaults, null, 4), 'utf-8');

        fis.log.notice('gfe project directory init done!');
    });
};
