//运行命令：fis3 release
fis.match('*', {
    useCache: false,,
    deploy: [
        fis.plugin('gfe-replace', {
            patterns: [{
                match: '__JS_DOMAIN__',
                replacement: '//js.atguat.com.cn'
            }, {
                match: '__CSS_DOMAIN__',
                replacement: '//css.atguat.com.cn'
            }]
        }),
        fis.plugin('local-deliver', {
            to: './build'
        })
    ]
});

fis.match('/build/**', {
    release: false
});
