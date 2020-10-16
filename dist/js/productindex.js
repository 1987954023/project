
define(['carindex','jquery', 'cookie'], function (carindex,$) {

   
    function tab(){
$('#header-center-li').mouseenter(function(){
var ul=$('#header-center-li').find('.room')
var li=$('#header-center-li').find('.header-lei-ul li')
ul.css("display",'block')
}).mouseleave(function(){
  var ul=$('#header-center-li').find('.room')
  ul.css("display",'none')
}
)
$('#lei-ul').find('li').mouseenter(function(){
  var index=$(this).index()
  $(this).css({
  background:"#fff",
  boxShadow: "  0 0 28px rgba(0, 0, 0, 0.08)"
  
  }).siblings("li").css({
    background:"#fdfdfd",
    boxShadow: "" 
  })
 $("nav").eq(index).css("display",'block').siblings('nav').css("display",'none')
})

    }
    function glass(){
$('main').on('mouseenter','.glass-small-top',function(ev){
  $('.glass-big').css("display",'block')
  $("#glass-small-p").css("display",'block')
  $(document).mousemove(function(ev){
    var offsetX=ev.pageX-$(".glass-small-top").offset().left-100
    var offsetY=ev.pageY-$(".glass-small-top").offset().top-100
    offsetX=Math.min($(".glass-small-top").outerWidth()- $('#glass-small-p').outerWidth(),offsetX)
  offsetX=Math.max(0,offsetX)
  offsetY=Math.min($(".glass-small-top").outerHeight()- $('#glass-small-p').outerHeight(),offsetY)
  offsetY=Math.max(0,offsetY)
  $('#glass-small-p').css({
       left:offsetX,
       top:offsetY
     })
     $('.glass-big').find('img').css({
      left:-2*offsetX,
      top:-2*offsetY
    })
  })
     
})

$('main').on("mouseleave",'.glass-small-top',function(ev){
  // console.log(1)
  $('.glass-big').css("display",'none')
  $("#glass-small-p").css("display",'none')
})
 var index=1
 $("main").on("click",'.glass-spanleft',function(){
   if(index==1){
     return
   }
   index--
   add(index)
 })
 $("main").on("click",'.glass-spanright',function(){
 if(index==5){
   return
 }
  index++
  add(index)
})
$("main").on("mouseenter",".glass-small-bottom ul li",function(){
   index=$(this).index()+1
  add(index)
})

function add(index){
  if(index==6){
    index=1
    $('.glass-small-bottom ul li').eq(0).css("border","1px solid red").siblings("li").css("border","1px solid transparent")
    $(".glass-small-top .glass-big").find('img').eq(0).css("display",'block').siblings("img").css("display",'none')
    $(".glass-small-top .glass-small-img").find('img').eq(0).css("display",'block').siblings("img").css("display",'none')
   
  }else if(index==0){
    index=5
    $('.glass-small-bottom ul li').eq(index-1).css("border","1px solid red").siblings("li").css("border","1px solid transparent")
    $(".glass-small-top .glass-big").find('img').eq(index-1).css("display",'block').siblings("img").css("display",'none')
    $(".glass-small-top .glass-small-img").find('img').eq(index-1).css("display",'block').siblings("img").css("display",'none')
 
  }else{
    $('.glass-small-bottom ul li').eq(index-1).css("border","1px solid red").siblings("li").css("border","1px solid transparent")
    $(".glass-small-top .glass-big").find('img').eq(index-1).css("display",'block').siblings("img").css("display",'none')
    $(".glass-small-top .glass-small-img").find('img').eq(index-1).css("display",'block').siblings("img").css("display",'none')
  
  }
  
}
    }
    function list(){
//找到详情页加载商品的id
var product_id=valueByName(location.search,"product_id")
// console.log(product_id)
$.ajax({
  url:"./../data/goods.json",
  success:function(arr){
    var arr1=arr.find(item=>item.id==product_id)
    // console.log(arr1)
    $(`<div class="main-top">
    首页<span>></span>生态产品 <span>></span>厨电 <span>></span>${arr1.briefName}
</div>

<div class="glass">
    <div class="glass-small">
    <div class="glass-small-top">
        <div class="glass-small-img">
        <img src=${arr1.img1} alt="">
        <img src=${arr1.img2} alt="">
        <img src=${arr1.img3} alt="">
        <img src=${arr1.img4} alt="">
        <img src=${arr1.img5} alt="">
    </div>
        <p id="glass-small-p"></p>
        <div class="glass-big">
        <img src=${arr1.img1} alt="">
        <img src=${arr1.img2} alt="">
        <img src=${arr1.img3} alt="">
        <img src=${arr1.img4} alt="">
        <img src=${arr1.img5} alt="">
            </div>
    </div>
    <div class="glass-small-bottom clr">
        <span class="glass-spanleft">&lt;</span>
        <ul class="clr">
            <li style="border: 1px solid red;"> <img src=${arr1.img1} alt=""></li>
            <li> <img src=${arr1.img2} alt=""></li>
            <li><img src=${arr1.img3} alt=""></li>
            <li> <img src=${arr1.img4} alt=""></li>
            <li><img src=${arr1.img5} alt=""></li>
        </ul>
        <span class="glass-spanright">&gt;</span>
    </div>
</div>
</div>

<div class="glass-right">
<div class="title">${arr1.briefName}</div>
<div class="intro">${arr1.state}</div>
<div class="price clr">
    <span>价   格</span>
    <span>¥${arr1.price}</span>
</div>
<div class="letter">
    服务说明
    <span class="iconfont icon-duihao"></span>包邮
    <span class="iconfont icon-duihao"></span>由第三方商家深圳艾特家有限公司提供服务,发货开票售后处理
</div>
<div class="coding"><span>商品编码</span>10086200650459${arr1.id}</div>
<div class="handle">
<div class="handle-div1 clr">
    <div  id="handle-div1">1</div>
    <div id="handle-div2">
<span id="handle-span1">+</span>
<span id="handle-span2">-</span>
    </div>
</div>
<div class="handle-div2" id="handle-car">加入购物车</div>

</div>
</div>`).appendTo('main')
  },error:function(error){
    // console.log(error)
  }
})
$('main').on('click',"#handle-span1",function(){
  var num=parseInt($('#handle-div1').html())
  num++
  $('#handle-div1').html(num)
})
$('main').on('click',"#handle-span2",function(){
  var num=parseInt($('#handle-div1').html())
  
  if(num==1){
    return 1
  }else{
    num--
  }
  $('#handle-div1').html(num)
})
$('main').on('click','#handle-car',function(){
  var num=parseInt($('#handle-div1').html())
  console.log(num)
  var first=$.cookie('goods')==null?true:false
  if(first){
    // console.log("无")
    $.cookie('goods',JSON.stringify([{
      id:product_id,
      num:num
    }]),{
      expires:7
    })
  }else{
    // console.log('有')
    var cookieArr=JSON.parse($.cookie('goods'))
    var same=false
    for(var i=0;i<cookieArr.length;i++){
      if(cookieArr[i].id==product_id){
        same=true
        break
      }
    }
    same?cookieArr[i].num+=num:cookieArr.push({
      id:product_id,
      num:num
    })
    $.cookie('goods', JSON.stringify(cookieArr), {
      expires: 7
  })
  }
  // console.log($.cookie('goods'))
  carindex.num()
  alert("加入成功")
})
    }
   
    function valueByName(search,name){
      //查找这个键值对开始位置
      var start=search.indexOf(name+"=")
      if(start==-1){
        return null
      }else{
        var end=search.indexOf("&",start)
        if(end==-1){
          end=search.length
        }
        //提取想要的键值对
        var str=search.substring(start,end)
        var arr=str.split("=")
        return arr[1]
      }
    }
    return {
      tab,
      glass,
      list

    }
})