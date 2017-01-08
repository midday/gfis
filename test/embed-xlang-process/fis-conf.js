//运行命令：fis3 release
// 对内嵌 scss 进行处理
fis.match('/html/**.{html,ftl}:scss', {
    parser: fis.plugin('node-sass', {
        // fis-parser-sass option
    }),
    optimizer: fis.plugin('clean-css', {
        // option of clean-css
    })
});

// 对内嵌 coffee script 进行处理
fis.match('/html/**.{html,ftl}:coffee', {
    parser: fis.plugin('coffee-script'),
    optimizer: fis.plugin('uglify-js', {
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