//运行命令：fis3 release
//js md5
fis.match('/js/**.js', {
    useHash: true
});

//css md5
fis.match('/css/**.css', {
    useHash: true
});

//image md5
fis.match('::image', {
    useHash: true
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
