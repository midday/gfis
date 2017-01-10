//运行命令：fis3 release
//将widget中的css发布到css中(带有widget文件夹)
fis.match('/widget/**.css', {
    release: '/css$0'
});

//将widget中的js发布到js中(带有widget文件夹)
fis.match('/widget/**.js', {
    release: '/js$0'
});

//将lib中的css发布到css中(不带有lib文件夹)
fis.match('/lib(/**.css)', {
    release: '/css$1'
});

//将lib中的js发布到js中(不带有lib文件夹)
fis.match('/lib(/**.js)', {
    release: '/js$1'
});

//不发布widget文件夹
fis.match('/widget', {
    release: false
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
