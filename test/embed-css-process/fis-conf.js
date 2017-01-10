//运行命令：fis3 release
// 对内嵌 css 进行处理
fis.match('/html/**.{html,ftl}:css', {
    optimizer: fis.plugin('clean-css', {
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
