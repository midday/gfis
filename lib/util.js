'use strict';
var fis = require('fis3');
var path = require('path');
var defaults = require('../config/defaults.js');

/**
 * gfis工具类集合
 */
var _ = module.exports;

/**
 * 获取配置文件的名称
 * @return {String} 配置文件的名称
 */
_.gfeConfigFileName = function() {
    return 'gfe-config.json';
};

/**
 * 获取配置文件参数
 */
_.gfeConfig = function() {
    var config = defaults;
    var gfeConfigPath = path.join(process.cwd(), _.gfeConfigFileName());
    if (fis.util.exists(gfeConfigPath)) {
        var gfeConfig = fis.util.readJSON(gfeConfigPath);
        config = fis.util.merge(config, gfeConfig);
    } else {
        fis.util.write(gfeConfigPath, JSON.stringify(config, null, 4), 'utf-8');
    }

    return config;
};
