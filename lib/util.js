'use strict';
var fis = require('fis3');
var path = require('path');
var defaults = require('../config/defaults.js');

/**
 * gfis�����༯��
 */
var _ = module.exports;

/**
 * ��ȡ�����ļ�������
 * @return {String} �����ļ�������
 */
_.gfeConfigFileName = function() {
    return 'gfe-config.json';
};

/**
 * ��ȡ�����ļ�����
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
