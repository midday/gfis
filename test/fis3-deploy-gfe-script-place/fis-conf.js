//运行命令：fis3 release
fis.match('*', {
	useCache: false,
    deploy: [
        fis.plugin('gfe-script-place'),
        fis.plugin('local-deliver', {
            to: './build'
        })
    ]
});

fis.match('/build/**', {
    release: false
});
