console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'index': 'index'
    },
    shim: {
        //设置依赖关系
        "cookie": ['jquery'],
        //parabola 不遵从amd规范
        parabola: {
            exports: "_"
        }
    }

})
require(['index'], function (index) {
    index.nav()
    index.banner()
    index.ceiling()
    index.main()
    index.main1()
    index.main2()
    index.main3()
    index.animation()
    index.win()
    index.backtop()

})