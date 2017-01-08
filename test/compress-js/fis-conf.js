//运行命令：fis3 release
fis.match('/js/**.js', {
    optimizer: fis.plugin('uglify-js', {
        // option of uglify-js
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
