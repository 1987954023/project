define(['jquery', 'cookie'], function ($) {

    function goodsNav(){
        $('.header-one .header-left-one').find('a').mouseenter(function(){
            var index=$(this).index()
            if(0<=index&&index<=12){
                $(this).css('color',"#fff")
            
            }else if(index==14){
                $(this).css({
                'background':'#fff',
                'color':'red'
                })
               $(this).find('ul').css('display','block')
                
            }         
        }).mouseleave(function(){
            var index=$(this).index()
            if(0<=index&&index<=12){
                $(this).css('color',"#afafaf")
            }else if(index==14){
                $(this).css({
                    color:'#afafaf',
                    background:''
                })
                $(this).find('ul').css('display','none')
            }
        })
       
        $('.header-one .header-right-one').find('a').mouseenter(function(){
    
            var index=$(this).index()
            // console.log(index)
            if(0<=index&&index<=4){
                $(this).css('color',"#fff")
            
            }else if(index==6){
                $(this).css({
                'background':'#fff',
                'color':'red'
                })
               $(this).find('ul').css('display','block')
                
            }else if(index==8){
                $(this).css({
                    'background':'#fff',
                    'color':'red'
                    })
                   $(this).find('.site').css('display','block')
            }else if(index==10){
                $(this).css({
                    'background':'#fff',
                    'color':'red'
                    })
                   $(this).find('.shouji').css('display','block')
            }else if(index==12){
                $(this).css({
                    'background':'#fff',
                    'color':'red'
                    })
            } 
        }).mouseleave(function(){
            var index=$(this).index()
            if(0<=index&&index<=4){
                $(this).css('color',"#afafaf")
            }else if(index==6){
                $(this).css({
                    color:'#afafaf',
                    background:''
                })
                $(this).find('ul').css('display','none')
            }else if(index==8){
                $(this).css({
                    color:'#afafaf',
                    background:''
                })
                $(this).find('.site').css('display','none')
            }else if(index==10){
                $(this).css({
                    color:'#afafaf',
                    background:''
                })
                $(this).find('.shouji').css('display','none')
            }else if(index==12){
                $(this).css({
                    color:'#afafaf',
                    background:''
                })
            }
        })
$('#site-a').on({
    mouseenter:function(){
         $(this).css("color",'red')
    },
    mouseleave:function(){
         $(this).css("color",'#777777')
    }
  
},'li')
   

    }
    function goodsmain(){
var ul=document.querySelector('.goods-top-right ul')
var span1=document.getElementsByClassName('')
var span2=document.getElementsByClassName('goods-span2')
// console.log(span1)
// console.log(span2)
$('.goods-span1').click(function(){
    $(this).css('display','none')
    $('.goods-span2').css('display','block')
    $('.goods-top-right ul').find('li').eq(10).nextAll('li').css('display','block')
})
$('.goods-span2').click(function(){
    $(this).css('display','none')
    $('.goods-span1').css('display','block')
    $('.goods-top-right ul').find('li').eq(10).nextAll('li').css('display','none')
})

    }
    //通过json加载商品列表
    function goods(){
$.ajax({
    url:'./../data/goods.json',
    success:function(obj){
        // console.log(obj)
        for(var i=0 ;i<obj.length;i++){
            $(` <li id='${obj[i].id}'>
            <a href="product.html?product_id=${obj[i].id}">
        <div class="main-div">
            <div class='main-div-top'>
                <span style="${obj[i].displayTags==''?'':'padding: 0 8px;'}">${obj[i].displayTags}</span>
            </div>
            <div class="main-div-img">
                <img src="https://res.vmallres.com/pimages/${obj[i].photoPath}428_428_${obj[i].photoName}" alt="">
            </div>
            <div class="title">
            ${obj[i].briefName}
            </div>
            <div class="main-price clr">
                <b>￥${obj[i].price}</b>
                <span style="${obj[i].tejia==''?'':'border: 1px solid #84c9fd;'}">${obj[i].tejia}</span>
                
            </div>
            <div class="main-letter">
              <div style="${obj[i].promoLabels[0]==''?'':'border: 1px solid #d5434a;'}">${obj[i].promoLabels[0]}</div>
               <div style="${obj[i].promoLabels[1]==''?'':'border: 1px solid #d5434a;'}">${obj[i].promoLabels[1]}</div>
            </div>
            <div class="main-bottom">
              <span>${obj[i].ren}</span>
            </div>
        </div>
        </a> </li>`).appendTo('.main ul')
        }
    },error:function(error){
        console.log(error)
    }
})
    }
    function goodsbuttom(){

$('.footer-left-dl').find('span').eq(0).click(function(){
    $('.footer-left-dl ').find('dd').animate({
left:"-150px"
    })
})
$('.footer-left-dl').find('span').eq(1).click(function(){
    $('.footer-left-dl ').find('dd').animate({
left:"0px"
    })
})
$('.footer-p-span').mouseenter(function(){
    $('.img1').css('display','block')
}).mouseleave(function(){
    $('.img1').css('display','none')
})
    }
    return {
        goodsNav,
        goodsmain,
        goods,
        goodsbuttom
    }
})