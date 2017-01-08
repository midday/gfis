//运行命令：fis3 release
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites', {
    	// option of csssprites
    })
})

// 对 CSS 进行图片合并
fis.match('/css/**.css', {
    useSprite: true
});

fis.match('*', {
    deploy: fis.plugin('local-deliver', {
        to: './build'
    })
});

fis.match('/build/**', {
    release: false
});
