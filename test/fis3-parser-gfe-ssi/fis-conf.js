//运行命令：fis3 release
fis.match('/html/**.html', {
    parser: fis.plugin('gfe-ssi', {
        ssiDomain: 'http://www.gome.com.cn'
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
