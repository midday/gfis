//运行命令：fis3 release
fis.match('*', {
    deploy: [
    fis.plugin('gfe-script-place'),
    fis.plugin('local-deliver', {
        to: './build'
    })]
});

fis.match('/build/**', {
    release: false
});
