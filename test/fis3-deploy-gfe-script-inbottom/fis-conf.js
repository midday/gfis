//运行命令：fis3 release
fis.match('*', {
    deploy: [
        fis.plugin('gfe-script-inbottom'),
        fis.plugin('local-deliver', {
            to: './build'
        })
    ]
});

fis.match('/build/**', {
    release: false
});
