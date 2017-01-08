//运行命令：fis3 release
fis.match('/es6/(**.es6)', {
    rExt: '.js',
    parser: fis.plugin('es6-babel',{
    	// option of es6-babel
    }),
    release: '/js/$1'
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
