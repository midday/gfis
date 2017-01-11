fis.match('::package', {
    prepackager: fis.plugin('autoprefixer')
});

fis.match('::package', {
    prepackager: fis.plugin('gfe-debug-output', {
        cssDomain: '//js.atguat.net.cn',
        jsDomain: '//css.atguat.net.cn'
    },'prepend')
});



fis.match('/js/**.js', {
    domain: '//js.atguat.net.cn'
});

fis.match('/css/**.css', {
    domain: '//css.atguat.net.cn'
});

fis.match('*', {
    useCache: false,
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
