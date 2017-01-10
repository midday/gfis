//运行命令：fis3 release
// 对内嵌 js 进行处理
fis.match('/html/**.{html,ftl}:js', {
    optimizer: fis.plugin('uglify-js', {
        // option of clean-css
    })
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
