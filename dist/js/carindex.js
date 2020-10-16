
define(['jquery', 'cookie'], function ($) {
function carHeader(){
    $('.header-one').on({
        mouseenter:function(){
            $(this).css("color","red")
        },
        mouseleave:function(){
            $(this).css("color",'#afafaf')
        }
    },'a')
}
  function last(){
      $('.last').find('li').mouseenter(function(){
          $(this).find('span').css({
            opacity:'1',
            filter:" alpha(opacity=100)"
          })
          $(this).find(".fuwu").css("display",'block')
      }).mouseleave(function(){
        $(this).find('span').css({
            opacity:'0.5',
            filter:" alpha(opacity=50)"
          })
          $(this).find(".fuwu").css("display",'none')
      })
  }

  function download(){
      num()
    cookie()

  }
  function num(){
      var cookieArr=JSON.parse($.cookie('goods'))
      var number=0
      for(i=0;i<cookieArr.length;i++){
          number+=cookieArr[i].num
      }
      $('.sum').html(number)
      $('.car-car').html("("+number+")")
  }
  function cookie(){
var cookieArr=JSON.parse($.cookie('goods'))
var newArr=[]
$.ajax({
    url:"./../data/goods.json",
    success:function(arr){
        for(i=0;i<arr.length;i++){
            for(j=0;j<cookieArr.length;j++){
                if(arr[i].id==cookieArr[j].id){
                    arr[i].num=cookieArr[j].num
                    newArr.push(arr[i])
                    break
                }
            }
        }
        // console.log(newArr)
        for(i=0;i<newArr.length;i++){
            $(` <div class="main-center clr" id="${newArr[i].id}">
            <ul class="clr">
                <li>
                 <span class="main-top-span1"></span>
                 <img src="https://res.vmallres.com/pimages/${newArr[i].photoPath}428_428_${newArr[i].photoName}" alt="">
                </li>
                <li>
                    <div>${newArr[i].briefName}</div>
                    <p>${newArr[i].displayTags}</p>
                </li>
                <li class="danjia">¥${newArr[i].price}</li>
                <li class="main-center-li">
                    <span class="main-center-span11">-</span>
                    <div class="main-center-num">${newArr[i].num}</div>
                    <span class="main-center-span22">+</span>
                </li>
                <li class="sub">${newArr[i].num*newArr[i].price}</li>
                <li><span class="main-center-delect">删除</span></li>
            </ul>
        </div>`).appendTo('.main-goods-car')
        }
     
    },error:function(error){
        console.log(error)
    }
})

  }
  function delete1(){
      $('.main-goods-car').on('click','.main-center-delect',function(){        
          var id=$(this).parents('.main-center').attr('id')
          var cookieArr=JSON.parse($.cookie('goods'))
          $(this).parents('.main-center').remove()
          for(i=0;i<cookieArr.length;i++){
              if(cookieArr[i].id=id){
                  cookieArr.splice(i,1)
                  break
              }
          }
          $.cookie('goods',JSON.stringify(cookieArr),{
              expires:7
          })
          num()
        //   console.log($.cookie('goods'))
      })
  }
  function add(){
$('.main-goods-car').on("click",'.main-center-li span',function(){
var id=$(this).parents('.main-center ').attr('id')
 var cookieArr=JSON.parse($.cookie('goods'))
for(i=0;i<cookieArr.length;i++){
    if(cookieArr[i].id==id){
        break
    }
}
if($(this).html()=='+'){
    cookieArr[i].num++
  
  
}else{
    cookieArr[i].num==1 ?alert("不能在减了"):cookieArr[i].num--
 
}
// console.log(cookieArr[i].num)
var obj=  $(this).parents('.main-center').find('.danjia').html().split('¥')[1]
var zong=cookieArr[i].num*obj
// console.log(obj)
$(this).parents('.main-center').find('.sub').html(zong)
$(this).siblings('div').html(cookieArr[i].num)

$.cookie('goods',JSON.stringify(cookieArr),{
    expires:7
})

num()
// console.log($.cookie('goods'))
// console.log(zong)
})
  }
 
function quan(){
    // $('body').on('click',"body",function(){
    //     $('.main-top-span1').eq(0).html('√')
    //     $('.main-top-span1').eq(0).css("background",'red')
    //     console.log(1)
    // })
        
    $('main').on('click',"#main-top-span1",function(){
        if($(this).html()==""){
            $(this).html('√')
        $(this).css("background",'red')
       
        $("#main-bottom-span1").html('√')
        $('#main-bottom-span1').css("background",'red')
        $(".main-top-span1").html('√')
        $('.main-top-span1').css("background",'red')
       
        }else{
            $(this).html('')
            $(this).css("background",'')
            $("#main-bottom-span1").html('')
            $('#main-bottom-span1').css("background",'')
            $(".main-top-span1").html('')
            $('.main-top-span1').css("background",'')
         
        }
        total()
    })
    $('main').on('click',"#main-bottom-span1",function(){
        if($(this).html()==""){
        $(this).html('√')
        $(this).css("background",'red')
        $("#main-top-span1").html('√')
        $('#main-top-span1').css("background",'red')
        $(".main-top-span1").html('√')
        $('.main-top-span1').css("background",'red')
        }else{
            $(this).html("")
            $(this).css("background",'')
            $("#main-top-span1").html('')
            $('#main-top-span1').css("background",'')
            $(".main-top-span1").html('')
            $('.main-top-span1').css("background",'')
        }
        total()
    })
    $('main').on('click',".main-top-span1",function(){
        if($(this).html()==""){
             $(this).html('√')
        $(this).css("background",'red')
        }else{
            $(this).html('')
            $(this).css("background",'')
        }
        var good=$('.main-top-span1')
        var iRuning=0
        for(var q=0;q<good.length;q++){
            if(good.eq(q).html()=="√"){
                iRuning++
            }
        }
        if(iRuning==good.size()){
            $("#main-top-span1").html('√')
            $('#main-top-span1').css("background",'red')
            $("#main-bottom-span1").html('√')
            $('#main-bottom-span1').css("background",'red')
        }else{
            $("#main-top-span1").html('')
            $('#main-top-span1').css("background",'')
            $("#main-bottom-span1").html('')
            $('#main-bottom-span1').css("background",'')
           
        }
    })
    total()
}
function total(){
  
    $('main').on('click','.set',function(){
        var goods=$('.main-top-span1')
        // console.log(goods)
        var zsum=0
        var jian=0
        for(var k=0;k<goods.length;k++){
            if(goods.eq(k).html()=="√"){        
            zsum+=parseInt(goods.eq(k).parents('.main-center').find('.sub').html())
jian++
            }

        }
        // if('.main-top-span1')
        // console.log(zsum)
        $('#main-bottom-sum').html(zsum)
$('#main-bottom-number').html(jian)
     
    })
}
    return { 
    carHeader,
    last,
    cookie,
    download,
    num,
    delete1,
    add,
    quan,
    total

    }
})