console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'logoindex': 'logoindex',
            
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
require(['logoindex'], function (logoindex) {
    logoindex.add()
    logoindex.eye()
   
})