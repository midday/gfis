//运行命令：fis3 release
fis.match('/{csslib,jslib}/**', {
    release: '$0'
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
