console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'goodsindex': 'goodsindex',
        'productindex':'productindex',
        'carindex':"carindex",      
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
require(['goodsindex','productindex','carindex'], function (goods,product,carindex) {
    goods.goodsNav()
   product.tab()
   product.glass()
   product.list()
   carindex.last()
   carindex.num()
})