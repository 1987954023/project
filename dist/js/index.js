define(['jquery', 'cookie'], function ($) {
    //顶部导航
    function nav() {
        $.ajax({
            url: './../data/nav.json',
            success: function (arr) {
                console.log(arr)
                arr.push({
                    title: '企业购'
                })
                // for (var i = 0; i < arr.length; i++) {
                //     $(`<li><a href="javascript:;">${arr[i].title}</a></li>`).appendTo('.header-center ul')

                // }
                var arr1 = arr[0].buttomImg
                var arr2 = arr[1].buttomImg
                var arr3 = arr[2].buttomImg
                var arr4 = arr[3].buttomImg
                var arr5 = arr[4].buttomImg
                for (j = 0; j < arr1.length; j++) {
                    $(`<li>
                    <img src=${arr1[j].img} alt="">
                    <div>${arr1[j].title}</div>
                    <p>${arr1[j].price}</p>
                </li>`).appendTo('#1 .nav-3')
                }
                for (k = 0; k < arr2.length; k++) {
                    $(`<li>
                    <img src=${arr2[k].img} alt="">
                    <div>${arr2[k].title}</div>
                    <p>${arr2[k].price}</p>
                </li>`).appendTo('#2 .nav-3')
                }
                for (l = 0; l < arr3.length; l++) {
                    $(`<li>
                    <img src=${arr3[l].img} alt="">
                    <div>${arr3[l].title}</div>
                    <p>${arr3[l].price}</p>
                </li>`).appendTo('#3 .nav-3')
                }
                for (m = 0; m < arr4.length; m++) {
                    $(`<li>
                    <img src=${arr4[m].img} alt="">
                    <div>${arr4[m].title}</div>
                    <p>${arr4[m].price}</p>
                </li>`).appendTo('#4 .nav-3')
                }
                for (n = 0; n < arr5.length; n++) {
                    $(`<li>
                    <img src=${arr5[n].img} alt="">
                    <div>${arr5[n].title}</div>
                    <p>${arr5[n].price}</p>
                </li>`).appendTo('#5 .nav-3')
                }
            },
            error: function (error) {
                console.log(error)
            }
        })
        $('.header').on('mouseleave', '.header-center', function () {
            $('.nav-nav1').css({
                display: 'none'
            })
        })
        $('.header').on('mouseenter', '.header-center li a', function () {
            $('.nav-nav1').css('display','block')
            // $('.nav').animate({
            //     height: '500px'
            // })
            var index = $(this).closest('li').index()
            $(this).addClass('active')
            $(this).closest('li').addClass('active1')
            $('.nav').eq(index).css({
                display: 'block'
            }).siblings('.nav').css({
                display: 'none'
            })
            if (index == 5) {
                $('.nav').css('display', 'none')
            }
$(".nav-nav1").mouseenter(function(){
    $('.nav-nav1').css('display','block')
    // console.log(1)
})
            $('.nav').eq(index).mouseleave(function () {
            
                $('.nav').css('display', 'none')
            })
            // $('.header-center').mouseleave(function () {
            //     $(".nav").eq(index).animate({
            //         height: '0'
            //     }, function () {
            //         $(".nav").eq(index).css('display', 'none')
            //     })
              
            // })
        })
        $('.header').on('mouseleave', '.header-center li a', function () {
            var index = $(this).closest('li').index()
            $(this).removeClass('active')
            $(this).closest('li').removeClass('active1')
        })

        $('.nav').on('mouseenter', '.nav-3 div', function () {
            $(this).addClass('active2')
        })
        $('.nav').on('mouseleave', '.nav-3 div', function () {
            $(this).removeClass('active2')
        })

    }
    //轮播图
    function banner() {
        $(function () {
            var span = $(".banner").find('span')
            var btn = $(".banner").find('ol li')
            var ul = $(".banner").find('ul')
            var iNow = 1
            var timer = null
            var isRuning = null
            timer1()

            btn.mouseenter(function () {
                iNow = $(this).index() + 1
                tab()
            })
            span.eq(0).click(function () {
                if (!isRuning) {
                    iNow--
                    tab()
                }
            })
            span.eq(1).click(function () {
                if (!isRuning) {
                    iNow++
                    tab()
                }
            })

            function timer1() {
                timer = setInterval(function () {
                    iNow++
                    tab()
                }, 2000)
            }
            $('.banner').mouseenter(function () {
                clearInterval(timer)
            }).mouseleave(function () {
                timer1()
            })


            function tab() {
                if (iNow == btn.size() + 1) {
                    btn.removeClass().eq(0).addClass('active3')
                } else if (iNow == 0) {
                    btn.removeClass().eq(3).addClass('active3')
                } else {
                    btn.removeClass().eq(iNow - 1).addClass('active3')
                }
                isRuning = true
                ul.animate({
                    left: iNow * -1920
                }, function () {
                    if (iNow == btn.size() + 1) {
                        iNow = 1
                        ul.css({
                            left: iNow * -1920
                        })
                    } else if (iNow == 0) {
                        iNow = 4
                        ul.css({
                            left: iNow * -1920
                        })
                    }
                    isRuning = false
                })
            }
        })
    }
    //吸顶
    function ceiling() {
        $(window).on('scroll', function () {
            var scroll = $(document).scrollTop()
            var scroll = Math.floor(scroll)
            if (scroll >= 674) {
                $('.ceiling').css({
                    position: 'fixed',
                    top: '0',
                })
                $('.juan').css('padding', '55px')
            } else if (scroll < 647) {
                $('.ceiling').css({
                    position: '',
                    top: '',
                })
                $('.juan').css('padding', '55')
            }
        })
    }
    //吸顶的数据
    function main() {
        $.ajax({
            url: 'data/index1.json',
            success: function (arr) {
                // console.log(arr)
                var arr1 = arr[0].buttomImg
                var arr2 = arr[1].buttomImg
                var arr3 = arr[2].buttomImg
                var arr4 = arr[3].buttomImg
                for (i = 0; i < arr1.length; i++) {
                    $(` <li>
                    <div class="div-img">
                        <img src=${arr1[i].img} alt="">
                        <div class="miaoxi">
                      ${arr1[i].free}
                        </div>
                        <div class="tupian">
                        <img src=${arr1[i].active}>
                        </div>
                    </div>
                    <div class="main-div">${arr1[i].title}</div>
                    <p>${arr1[i].letter}</p>
                    <div class="main-div22">
                    <div class="main-div2">
                        <span>¥</span>
                        <span>${arr1[i].price}</span>
                        <span>${arr1[i].span}</span>
                    </div>
                    <div>
                </li>`).appendTo('.main-1-goods #main-ul1')
                }
                for (k = 0; k < arr2.length; k++) {
                    $(` <li>
                    <div class="div-img">
                        <img src=${arr2[k].img} alt="">
                        <div class="miaoxi">
                        
                      ${arr2[k].free}
                        </div>
                        <div class="tupian">
                        <img src=${arr2[k].active}>
                        </div>
                    </div>
                    <div class="main-div">${arr2[k].title}</div>
                    <p>${arr2[k].letter}</p>
                    <div class="main-div22">
                    <div class="main-div2">
                        <span>¥</span>
                        <span>${arr2[k].price}</span>
                        <span>${arr2[k].span}</span>
                    </div>
                    <div>
                </li>`).appendTo('.main-1-goods #main-ul2')
                }
                for (i = 0; i < arr3.length; i++) {
                    $(` <li>
                    <div class="div-img">
                        <img src=${arr3[i].img} alt="">
                        <div class="miaoxi">
                      ${arr3[i].free}
                        </div>
                        <div class="tupian">
                        <img src=${arr3[i].active}>
                        </div>
                    </div>
                    <div class="main-div">${arr3[i].title}</div>
                    <p>${arr3[i].letter}</p>
                    <div class="main-div22">
                    <div class="main-div2">
                        <span>¥</span>
                        <span>${arr3[i].price}</span>
                    </div>
                    <div>
                </li>`).appendTo('.main-1-goods #main-ul4')
                }
                // console.log(arr3)
                for (k = 0; k < arr4.length; k++) {
                    $(` <li>
                    <div class="main3-div1">${arr4[k].title}</div>
                    <p>${arr4[k].letter}</p>
                    <div class="main3-div2">${arr4[k].price}</div>
                    <div class="main3-div3">
                        <img src=${arr4[k].img} alt="">
                        <div class="main3-div3-1">立即购买</div>
                    </div>
                </li>`).appendTo('#main-ul3')
                }

            },
            error: function (error) {

            }
        })
    }
    //新品发布
    function main1() {

        $.ajax({
            url: './../data/index1.json',
            success: function (arr) {
                var arr1 = arr[4].buttomImg
                for (i = 0; i < arr1.length; i++) {
                    $(` <li>
                    <img src=${arr1[i].img} alt="">
                    <div class="new-goods-div1">${arr1[i].title}</div>
                    <p>${arr1[i].letter}</p>
                    <div class="new-goods-div2">${arr1[i].price}</div>
                </li>`).appendTo('#new-goods-ul1')
                }

                $('.new-goods ul').on('mouseenter', 'li', function () {
                    $(this).css({
                        top: '-2px',
                        boxShadow: '0 5px 5px -5px  #909090'
                    })
                })
                $('.new-goods ul').on('mouseleave', 'li', function () {
                    $(this).css({
                        top: '0px',
                        boxShadow: ''
                    })
                })
                var iNow = 0
                var isRuning = null
                tab()

                function tab() {
                    isRuning = true
                    $('.new-goods ul').animate({
                        left: -iNow * 240
                    }, 200, function () {
                        if (iNow <= 0) {
                            $('.new-goods ul').css('left', '0px')
                        } else if (iNow >= 1) {

                            $('.new-goods ul').css('left', `${-iNow*242}`)
                        }
                        isRuning = false

                    })
                    if (iNow <= 0) {
                        $('.new-goods-spanleft').addClass('newbackground').siblings('span').removeClass('newbackground')
                    } else if (iNow >= 1) {
                        $('.new-goods-spanright').addClass('newbackground').siblings('span').removeClass('newbackground')
                    }
                }
                $('.new-goods-spanleft').click(function () {
                    if (!isRuning) {
                        if (iNow == 0) {
                            return
                        } else {
                            iNow--
                            tab()
                        }

                    }
                })
                $('.new-goods-spanright').click(function () {
                    if (!isRuning) {
                        if (iNow == 1) {
                            return
                        } else {
                            iNow++
                            tab()
                        }

                    }
                })
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
    //阖家欢乐
    function main2() {
        $.ajax({
            url: './../data/index1.json',
            success: function (arr) {
                var arr1 = arr[5].buttomImg
                for (i = 0; i < arr1.length; i++) {
                    $(` <li>
                    <img src=${arr1[i].img} alt="">
                    <div class="new-goods-div1">${arr1[i].title}</div>
                    <p>${arr1[i].letter}</p>
                    <div class="new-goods-div2">${arr1[i].price}</div>
                </li>`).appendTo('#new-goods-ul2')
                }
                $('.new-goods-2 ul').on('mouseenter', 'li', function () {
                    $(this).css({
                        top: '-2px',
                        boxShadow: '0 5px 5px -5px  #909090'
                    })
                })
                $('.new-goods-2 ul').on('mouseleave', 'li', function () {
                    $(this).css({
                        top: '0px',
                        boxShadow: ''
                    })
                })
                $('.new-goods ul').on('mouseenter', 'li', function () {
                    $(this).css({
                        top: '-2px',
                        boxShadow: '0 5px 5px -5px  #909090'
                    })
                })
                $('.new-goods ul').on('mouseleave', 'li', function () {
                    $(this).css({
                        top: '0px',
                        boxShadow: ''
                    })
                })

            },
            error: function (error) {
                console.log(error)
            }
        })

    }
    //选项卡
    function main3() {
        $.ajax({
            url: './../data/index1.json',
            success: function (arr) {
                var arr1 = arr[5].buttomImg2
                // console.log(arr1)
                for (i = 0; i < arr1.length; i++) {

                    var node = $(` <ul class="clr" style="display:${i==0?"block":"none"}"></ul>`)

                    node.appendTo('.tab .tab-goods')
                    var arr2 = arr1[i].buttomImg
                    for (j = 0; j < arr2.length; j++) {
                        $(`<li>
                        <div class="div-img">
                            <img src=${arr2[j].img} alt="">
                            <div class="miaoxi">
                            ${arr2[j].free}
                            </div>
                            <div class="tupian">
                           
                            </div>
                        </div>
                        <div class="main-div">${arr2[j].title}</div>
                        <p>${arr2[j].letter}</p>
                        <div class="main-div22">
                            <div class="main-div2">
                                <span>¥</span>
                                <span>${arr2[j].price}</span>
                                <span>起</span>
                            </div>
                        </div>
                    </li>`).appendTo(node)
                    }


                }

                $('.tab').find('.tab-top-ul li').click(function () {
                    $(this).addClass('tabColor').siblings('li').removeClass('tabColor')
                    var index = $(this).index()

                    $('.tab .tab-goods').find('ul').eq(index).css({
                        display: 'block'
                    }).siblings('ul').css({
                        display: 'none'
                    })
                })
            },
            error: function (error) {
                console.log(error)
            }
        })
    }
    //2d动画
    function animation() {
        // console.log($('.main3 .main3-left').find('ul li'))
        $('.main3 .main3-left').find('ul li').eq(4).click(function () {
            // console.log($('.main3 .main3-left').find('ul li').eq(4).siblings('li'))
            $('.main3 .main3-left').find('ul li').eq(4).siblings('li').css({
                transform: 'rotateY(180deg)',
            })
          
        })
        $('.main3 .main3-left').find('ul li').click(function(){
            $(this).css({
                transform: 'rotateY(180deg)'
            })
        })
    }
    //中奖手机号
    function win() {
        $.ajax({
            url: 'data/index2.json',
            success: function (arr) {
                 console.log(arr)
                for (i = 0; i < arr.length; i++) {
                    $(`<li class="clr">
                    <span>${arr[i].custLoginName}</span>
                    <span>${arr[i].prizeName}</span>
                </li>`).appendTo('.main3 .main3-right ul')
                }
            },
            error: function (error) {
                console.log(error)
            }
        })

        var ul = document.getElementById('main3-ul')
        var speed = -1
        var timer = null

        function timer1() {
            timer = setInterval(function () {
                ul.style.top = ul.offsetTop + speed + 'px'
                
            }, 15)
        }
        ul.onmouseenter = function () {
            console.log(1)
            clearInterval(timer)
        }
        ul.onmouseleave = function () {
            timer1()
        }
        timer1()
    }
    //返回顶部
    function backtop() {
        var footer = document.getElementById('footer')
        window.onscroll = function () {
            var distance = document.body.scrollTop || document.documentElement.scrollTop
            footer.onclick = function () {
                var timer1 = setInterval(function () {
                    document.body.scrollTop -= 800
                    document.documentElement.scrollTop -= 800
                    var s1 = document.documentElement.scrollTop
                    var s2 = document.body.scrollTop
                    if (s1 == 0 && s2 == 0) {
                        clearInterval(timer1)
                    }
                }, 10);
            }
        }
    }
    return {
        nav,
        banner,
        ceiling,
        main,
        main1,
        main2,
        main3,
        animation,
        win,
        backtop
    }
})