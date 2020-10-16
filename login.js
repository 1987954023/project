console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'loginindex': 'loginindex',
            
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
require(['loginindex'], function (loginindex) {
   loginindex.add()
   loginindex.eye()
   loginindex.tab()
})