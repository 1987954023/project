define(['carindex','jquery', 'cookie'], function (carindex,$) {

function add(){
    var in1=$("#in1")
    var in2=$("#in2")
    var in3=$('#in3')
    
    in1.focus(function(){
        $('.input1').css("display",'block')
        $('.input1').html('')
    })
    in1.on('input',function(){
        var in11=in1.val()
        var regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/
        if(in11.length==0){
            $('.input1').html('请输入手机号')
            $('.input1').css('color',"red")
            $('.input-p1').css("display",'none')
        }else if(!regs.test(in1.val())){
            $('.input1').html('手机号输入不合法') 
            $('.input1').css('color',"red")
            $('.input-p1').css("display",'none')
        }else{
            $('.input1').css("display",'none')
            $('.input-p1').css("display",'block')
        }
    })
    $("#in2").on('input',function(){
        var in22=in2.val()
        var in222=$('.input-div').find('div')
        // console.log(in222)
        var in22=in2.val()
        if(in22.length==0){
            $(".input2").css({
                display:"block",
                color:"red"
            })
          $(".input2").html("请输入密码")
        }else if(in22.length<8){
            $(".input2").css({
                display:"block",
                color:"red"
            })
          $(".input2").html("密码长度至少为8")
        }else{
            $(".input2").css({
                display:"none",
            })
            $('.input-p2').css("display",'block')
        }    
        if(in22.length>=8){
            $('.input-div').css("display",'block')
        if(/^\d+$/.test(in2.val()) || /^[a-z]+$/.test(in2.val()) || /^[a-z]+$/.test(in2.val())){
in222.eq(0).addClass('active2').siblings().removeClass('active2')
        }else if(/\d/ && /[A-Z]/.test(in2.val()) && /[a-z]/.test(in2.val())){
            in222.eq(2).addClass('active2').siblings().removeClass('active2')
        }else{
            in222.eq(1).addClass('active2').siblings().removeClass('active2')
        }
    }else{
        $('.input-p2').css("display",'none')
        $('.input-div').css("display",'none')
        $(".input2").css({
            display:"none",
        })
    }
    })
    in3.on('input',function(){
        var in22=in2.val()
        var in33=in3.val()
        if(in22==in33){
            $('.input-p3').css("display",'block')
            $('.input3').css({
                display:"none"
            })
        }else{
            $('.input3').css({
                color:"red",
                display:"block"
            })
            $('.input3').html('两次密码不一致')
            $('.input-p3').css("display",'none')
        }

    })
        in3.blur(function(){
            $('.input3').html('')
        })
    $('.in4').click(function(){
        $.ajax({
        type:"post",
        url:"php/login.php",
        data:{
             username:in1.val(),
             password:in2.val(),
        },
        success:function(arr){
           
            // console.log(arr)
            var obj=JSON.parse(arr)
          if(obj.code){
alert("用户名存在")
          }else{
alert("注册成功")
          }
        },error:function(error){
            console.log(error)
        }
    })
    })
  
    
}
function eye(){
$('.input2-b2').click(function(){
    $(this).css("display",'none')
    $('.input2-b1').css("display",'block')
    $(this).siblings("input").attr("type","text")
})
$('.input2-b1').click(function(){
    $(this).css("display",'none')
    $('.input2-b2').css("display",'block')
    $(this).siblings("input").attr("type","password")
})
$('.input3-b2').click(function(){
    $(this).css("display",'none')
    $('.input3-b1').css("display",'block')
    $(this).siblings("input").attr("type","text")
})
$('.input3-b1').click(function(){
    $(this).css("display",'none')
    $('.input3-b2').css("display",'block')
    $(this).siblings("input").attr("type","password")
})
}
function tab(){
$(".main-email").click(function(){
    $(this).addClass("active").siblings().removeClass('active')
    $('.main-right').css("display",'none').siblings().css("display",'block')
})
$(".main-phone").click(function(){
    $(this).addClass("active").siblings().removeClass('active')
    $('.main-right-1').css("display",'none').siblings().css("display",'block')
})
}
return{
    add,
    eye,
    tab
}

})