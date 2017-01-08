//运行命令：fis3 release
fis.match('/less/(**.less)', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    release: '/css/$1'
});

fis.match('/less/mixins/**', {
    release: false
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
