//运行命令：fis3 release
//被忽略发布的文件夹或文件，可以使用glob表达式
var ignoreReleaseFiles = ['/ignore{A,B}/**', '/containsIgnoreFile/ignore{A,B}.txt'];

ignoreReleaseFiles.forEach(function(ignoreReleaseItem) {
    fis.match(ignoreReleaseItem, {
        release: false
    });
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
