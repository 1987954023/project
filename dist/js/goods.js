console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'goodsindex': 'goodsindex',
        'carindex':"carindex",
        'index':'index'
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
require(['goodsindex','carindex','index'], function (goods,carindex,index) {

    goods.goodsNav()
    goods. goodsmain()
    goods.goods()
    goods.goodsbuttom()
    carindex.last()
    carindex.num()
    index.nav()

})