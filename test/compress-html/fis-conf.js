//运行命令：fis3 release
fis.match('/html/**.html', {
    optimizer: fis.plugin('html-minifier',{
    	 // option of html-minifier
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
