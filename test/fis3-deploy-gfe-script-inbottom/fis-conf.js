//运行命令：fis3 release
fis.match('*', {
	useCache: false,
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
