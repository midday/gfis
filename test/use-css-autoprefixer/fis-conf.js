//运行命令：fis3 release
// 启用 fis3-postprocessor-autoprefixer插件
fis.match('css/*.css', {
    postprocessor: fis.plugin("autoprefixer", {
        "browsers": ['Firefox >= 20', 'Safari >= 6', 'Explorer >= 9', 'Chrome >= 12', "ChromeAndroid >= 4.0"],
        "flexboxfixer": true,
        "gradientfixer": true
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
