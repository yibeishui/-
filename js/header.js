$(function () {
    $.ajax(
        {
            url: "../json/headerJson.json",
            success: function (res) {
                var res = res;
                var ona = ` <div class="two">
                   <div class="content">
                    <ul class="fl two-left"></ul>
                    <div class="fl two-right"></div>   
                  </div>
                 </div>`
                for (var i = 0; i < $(".header-one li").length; i++) {
                    $(".header-one li a").eq(i).append(ona)
                }

                for (var i = 0; i < res.twoNav.length; i++) {
                    var html = ""

                    for (var j = 0; j < res.twoNav[i].left.length; j++) {

                        html += `<li class="fl"><a href="${res.twoNav[i].left[j].href}">
                    <img src="${res.twoNav[i].left[j].src}">
                    <p>${res.twoNav[i].left[j].con}</p>
                    </a></li>`
                    }

                    $(".two-left").eq(i).append(html);
                }

                for (var i = 0; i < res.twoNav.length; i++) {
                    var nn = "";
                    var qq = "";

                    for (var j = 0; j < res.twoNav[i].right.length; j++) {
                        // console.log(res.twoNav[i].right[j].title);              
                        if (res.twoNav[i].right[j].title) {
                            var r = `<dt>${res.twoNav[i].right[j].title}</dt>`
                            for (var k = 0; k < res.twoNav[i].right[j].con.length; k++) {
                                r += `<dd><a href="${res.twoNav[i].right[j].con[k].href}">${res.twoNav[i].right[j].con[k].con}</a></dd>`
                            }

                            nn = $(`<dl class="fl"></dl>`).html(r);
                            $(".two-right").eq(i).append(nn)

                        } else {
                            qq += `<li><a href="${res.twoNav[i].right[j].href}">${res.twoNav[i].right[j].con}</a></li>`

                        }

                    }
                    var mm = $("<ul></ul>").html(qq);
                    $(".two-right").eq(i).append(mm)
                }



                $(".header-one>li").hover(function () {

                    var index = $(this).index();
                    $(".two").eq(index).css("display", "block").siblings().css("display", "none")
                }, function () {
                    $(".two").css("display", "none")
                })


            }
        }
    )
    
    $(window).scroll(function (event) {
        var wy = window.scrollY;
        if (wy >= 36) {
            $(".header").css({
                "position": "fixed",
                "top": 0
            })
            $(".zhiding").css("display","block")
          
        }else{
            $(".header").css({
                "position": "relative",
                
            })
            $(".zhiding").css("display","none")
        }
       
    
    })
    $(".zhiding").click(function(){
        window.scrollTo(0,0)
    })
    $(".zixun").click(function(){
        $(this).css("display","none");
        $(".zixun-big").css("display","block");

    })
    $(".zixun-big-guanbi").click(function(){
        $(".zixun-big").css("display","none");
        $(".zixun").css("display","block")

    })
    $(".zixun-1").click(function(e){
        e.preventDefault();
        $(".zixun").css("display","none");
        $(".zixun-big").css("display","block");

    })
    $(".denglu").click(function(){
        window.location.href="http://localhost/stu/html/denglu.html"
    })


})