var fis = module.exports = require('fis3');
var path = require('path');
var _ = fis.util;

fis.require.prefixes.unshift('gfis');
fis.cli.name = 'gfis';
fis.cli.info = require('./package.json');

var gfis = {
    //初始化
    init: function() {
        this.config = this._getConfig();
        this.setEvnCommonConfig();
        this.setEnvPrivateConfig();
    },
    //设置环境通用配置
    setEvnCommonConfig: function() {
        this._preCompile();
        this._processFileByMd5();
        this._processFileByCompress();
        this._processCssSprite();
        this._processUrlCombo();
        this._processFileByReleasePattern();
        this._outputDebugFile();
    },
    //设置环境私有配置
    setEnvPrivateConfig: function() {
        this._setUatEvnConfig();
        this._setPreEvnConfig();
        this._setPrdEvnConfig();
    },
    //异构语言预编译处理
    _preCompile: function() {
        if (config.release.saas) {
            fis.match('/saas/**.{sass,scss}', {
                parser: fis.plugin('sass'),
                rExt: '.css'
            });
        }
        if (config.release.less) {
            fis.match('/less/**.less', {
                parser: fis.plugin('less'),
                rExt: '.css'
            });
        }
    },
    //处理文件MD5
    _processFileByMd5: function() {
        if (config.release.cssMd5) {
            fis.match('/{saas,less,css}/**.{css,saas,scss,less}', {
                useHash: true
            });
        }
        if (config.release.jsMd5) {
            fis.match('/js/**.js}', {
                useHash: true
            });
        }
    },
    //处理文件压缩
    _processFileByCompress: function() {
        //是否开启压缩js文件
        if (config.release.jsCompress) {
            fis.match('/js/**.js', {
                optimizer: fis.plugin('uglify-js')
            });
        }

        //是否开启压缩css文件
        if (config.release.cssCompress) {
            fis.match('/css/**.{css,less,saas}', {
                optimizer: fis.plugin('clean-css')
            });
        }

        //是否开启压缩png图片
        if (config.release.pngCompress) {
            fis.match('/css/**.png', {
                optimizer: fis.plugin('png-compressor')
            });
        }
    },
    //处理雪碧图
    _processCssSprite: function() {
        if (config.release.cssSprite) {
            fis.match('::packager', {
                spriter: fis.plugin('csssprites')
            });
            fis.match('*.{css,saas,less}', {
                useSprite: true
            });
        }
    },
    //处理url combo
    _processUrlCombo: function() {
        if (config.release.cssCombo) {

        }
        if (config.rlease.jsCombo) {

        }
    },
    //处理文件的发布规则
    _processFileByReleasePattern: function() {
        var ignoreReleaseFiles = config.release.ignoreReleaseFiles;
        if (ignoreReleaseFiles !== null) {
            ignoreReleaseFiles.forEach(function(glob) {
                fis.match(glob, {
                    release: false
                });
            });
        }
    },
    //输出debug文件
    _outputDebugFile: function() {
        if (config.release.debug) {
            fis.match('::packager', {
                postpackager: fis.plugin('gfe-debug-output', {
                    debugDomain: config.release.debugDomain
                })
            });
        }
    },
    //设置uat环境配置
    _setUatEvnConfig: function() {
        fis
            .media('uat')
            .match('*', {
                deploy: _replacer([{
                    from: '__CSS_DOMAIN__',
                    to: config.release.uatDomain.css,
                }, {
                    from: '__JS_DOMAIN__',
                    to: config.release.uatDomain.js
                }]).concat(fis.plugin('local-deliver', { to: './build' }))
            })
            .match('/js/**.js', {
                url: '/' + config.projectPath,
                domain: config.release.uatDomain.js
            })
            .match('/css/**.{css,saas,less}', {
                url: '/' + config.projectPath,
                domain: config.release.uatDomain.css
            })
            .match('::image', {
                url: '/' + config.projectPath
            });
    },
    //设置pre环境配置
    _setPreEvnConfig: function() {
        fis
            .media('pre')
            .match('*', {
                deploy: _replacer([{
                    from: '__CSS_DOMAIN__',
                    to: config.release.preDomain.css,
                }, {
                    from: '__JS_DOMAIN__',
                    to: config.release.preDomain.js
                }]).concat(fis.plugin('local-deliver', { to: './build' }))
            })
            .match('/js/**.js', {
                url: '/' + config.projectPath,
                domain: config.release.preDomain.js
            })
            .match('/css/**.{css,saas,less}', {
                url: '/' + config.projectPath,
                domain: config.release.preDomain.css
            })
            .match('::image', {
                url: '/' + config.projectPath
            });
    },
    //设置prd环境配置
    _setPrdEvnConfig: function() {
        fis
            .media('prd')
            .match('*', {
                deploy: _replacer([{
                    from: '__CSS_DOMAIN__',
                    to: config.release.prdDomain.css,
                }, {
                    from: '__JS_DOMAIN__',
                    to: config.release.prdDomain.js
                }]).concat(fis.plugin('local-deliver', { to: './build' }))
            })
            .match('/js/**.js', {
                url: '/' + config.projectPath,
                domain: config.release.prdDomain.js
            })
            .match('/css/**.{css,saas,less}', {
                url: '/' + config.projectPath,
                domain: config.release.prdDomain.css
            })
            .match('::image', {
                url: '/' + config.projectPath
            });
    },
    //获取配置文件
    _getConfig: function() {
        var config = require('./lib/defaults.js');
        var gfeConfigPath = path.join(process.cwd(), 'gfe-config.json');
        if (_.exists(gfeConfigPath)) {
            var gfeConfig = _.readJSON(gfeConfigPath);
            config = _.merge(config, gfeConfig);
        } else {
            _.write(gfeConfigPath, JSON.stringify(config, null, 4), 'utf-8');
        }

        return config;
    },
    //替换工具类
    _replacer: function(opt) {
        if (!Array.isArray(opt)) {
            opt = [opt];
        }
        var r = [];
        opt.forEach(function(raw) {
            r.push(fis.plugin('replace', raw));
        });
        return r;
    }
};
