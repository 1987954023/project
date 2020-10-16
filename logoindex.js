define(['carindex','jquery', 'cookie'], function (carindex,$) {

    function add(){
        var in1=$("#in1")
        var in2=$("#in2")
        var in3=$("#in3")
        in1.focus(function(){
            $(".input-span1").css('display','none')
        })
        in2.focus(function(){
            $(".input-span2").css('display','none')
        })
        in3.click(function(){
            $.ajax({
                type:"post",
                url:"php/logo.php",
                data:{
                    username:in1.val(),
                    password:in2.val()
                },
                success:function(arr){
var obj=JSON.parse(arr)
if(obj.code==1){
    $(".input-span1").css({
            display:"block",
            color:"red"
        })
    $(".input-span1").html("请数入账号")
}else if(obj.code==2){
    $(".input-span2").css({
        display:"block",
        color:"red"
    })
    $(".input-span2").html("请数入密码")
}else if(obj.code==3){
    alert("登陆失败")
}else{
    alert("登陆成功")
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
    $(".input2-b1").css("display",'block')
    $(this).siblings("input").attr("type",'text')
})
$('.input2-b1').click(function(){
    $(this).css("display",'none')
    $(".input2-b2").css("display",'block')
    $(this).siblings("input").attr("type",'password')
    
})
$("#in1").focus(function(){
   
    $(this).css("border","1px solid #007dff")
})
$("#in1").blur(function(){
   
    $(this).css("border","1px solid transparent")
})
$("#in2").focus(function(){
   
    $(this).css("border","1px solid #007dff")
})
$("#in2").blur(function(){
   
    $(this).css("border","1px solid transparent")
})
    }
    return{
        add,
        eye
    }
    
    })