//运行命令：fis3 release
fis.match('/js/**.js', {
    domain: '//js.atguat.com.cn'
});

fis.match('/css/**.css', {
    domain: '//css.atguat.com.cn'
});

fis.match('*', {
	useCache: false,
    deploy: [
        fis.plugin('gfe-combo-url'),
        fis.plugin('local-deliver', {
            to: './build'
        })
    ]
});

fis.match('/build/**', {
    release: false
});
