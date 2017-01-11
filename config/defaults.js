module.exports = {
    //工程目录前缀
    projectPath: "gmpro/2.0.0/project/1.0.0",
    //静态资源需发布文件夹
    projectFolder: "css|js|widget",
    //静态资源所属应用
    projectApp: "image",
    //模板发布路径
    tplPath: "WEB-INF/template/project",
    //模板文件夹
    tplFolder: "html",
    //模板所属应用
    tplApp: "channel_web",

    //发布参数
    release: {
        //预编译
        sass: false, //是否开启sass编译
        
        //MD5
        cssMd5: false, //css生成md5戳
        jsMd5: false, //js生成md5戳
        imageMd5: false, //image生成md5戳

        //压缩&混淆
        jsCompress: true, //是否开启压缩js文件
        cssCompress: true, //是否开启压缩css文件
        pngCompress: true, //是否开启压缩png图片
        htmlCompress: false,//是否开启压缩html文件

        //雪碧图
        cssSprite: true, //是否开启css sprite功能

        //css的浏览器前缀
        cssAutoPrefixer: false,//是否开启css对浏览器前缀的处理

        //静态资源combo
        urlCombo: true, //是否合并js、css文件

        //输出debug文件
        debug: true, //是否输出一套debug页面
        debugDomain: '//127.0.0.1', //debug页面中静态资源域名

        //忽略的发布文件
        ignoreReleaseFiles: null, //不发布的资源，请使用glob通配符模式，多个以逗号分隔

        //环境域名
        uatDomain: { //uat环境对应的域名
            js: "//js.atguat.net.cn",
            css: "//css.atguat.net.cn",
            bgimg: "//app.atguat.net.cn"
        },
        preDomain: { //pre环境对应的域名
            js: "//js.gomeprelive.net.cn",
            css: "//css.gomeprelive.net.cn",
            bgimg: "//app.gomeprelive.net.cn"
        },
        prdDomain: { //prd环境对应的域名
            js: "//js.gomein.net.cn",
            css: "//css.gomein.net.cn",
            bgimg: "//app.gomein.net.cn"
        }
    }
};
