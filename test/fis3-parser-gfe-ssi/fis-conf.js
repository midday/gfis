//运行命令：fis3 release
fis.match('/html/**.html', {
    parser: fis.plugin('gfe-ssi', {
        ssiDomain: 'http://www.gome.com.cn'
    })
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
