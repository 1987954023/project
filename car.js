console.log("加载成功")
require.config({
    paths: {
        'jquery': 'jquery-1.10.1.min',
        'cookie': 'jquery.cookie',
        'goodsindex': 'goodsindex',
        'carindex':'carindex'
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
require(['goodsindex','carindex'], function (goodsindex,car) {
   goodsindex.goodsNav()
   goodsindex.goodsbuttom()
    car.carHeader()
    car.last()
    car.download()
    car.delete1()
    car.add()
    car.quan()
    car.total()
})