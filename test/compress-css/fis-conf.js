//运行命令：fis3 release
fis.match('/css/**.css', {
    optimizer: fis.plugin('clean-css', {
        // option of clean-css
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
