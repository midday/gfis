//运行命令：fis3 release
fis.match('/html/**.ftl', {
    parser: fis.plugin('gfe-freemarker')
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
