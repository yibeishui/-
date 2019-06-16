
$(function () {



    $(".zhuce-add-input").focus(function () {

        $(this).stop(true).css("border-bottom", "2px solid #1428a0").siblings().css("color", "#1428a0").animate({


            "font-size": "12px",
            "line-height": "17px",
            "bottom":"50px"

        }, 300)

    })
$(".zhuceadd-emortel span").click(function(){
    $(this).addClass("zhuceadd-emortel-span").siblings().removeClass("zhuceadd-emortel-span")
})




    $(".zhuce-add-input").blur(function () {
        var result = $(this).val();
        x = $.trim(result);
        if (x == "") {

            $(this).stop(true).css("border-bottom", "1px solid #cccccc").siblings().css("color", "#cccccc").animate({

                "font-size": "18px",
                "line-height": "18px",
                "bottom":"12px"

            }, 300)
        } else {
            $(this).css("border-bottom", "1px solid #cccccc").siblings().css("color", "#cccccc")
        }

    })

    var user = false;
    var pass = false;
    var anquan = false;
    var tele=false;
    var twopas=false;
    var tel =/^1[3456789]\d{9}$/
    var emil = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;

    // })
    var num;
    // num=Math.floor(Math.random()*9000+1000);
    $(".zhuceaddshuaxin").click(function () {

        num = Math.floor(Math.random() * 9000 + 1000);
        $(this).siblings().html(num);

        

    })



    $(".next").click(function () {
        $(this).css("background","blue")
        var em = $.trim($("#email").val());
        var tell = $.trim($("#tel").val());
        var pas = $.trim($("#pass").val());
        var twopass = $.trim($("#twopass").val());
        var aq = $.trim($("#anquanma").val());
        var oo = $(".zhuceadd-yzm").text()
       
        if (em != "") {
            if (emil.test(em)) {
                user = true;
            } else {
                user = false;
                $(".zhuceadd-lab").eq(0).html("格式不对")
            }

        }else{
            user = false;
            $(".zhuceadd-lab").eq(0).html("请输入ID")

        }

        if (tell != "") {
            if (tel.test(tell)) {
                tele = true;
            } else {
                tele = false;
                $(".zhuceadd-lab").eq(1).html("格式不对")
            }

        }else{
            tele = false;
            $(".zhuceadd-lab").eq(1).html("请输入ID")

        }



        if (pas != "") {

            pass = true;
        } else {
            pass = false;
            $(".zhuceadd-lab").eq(2).html("请输入密码")
        }
        if(twopass!=""){
            if(twopass==pas){
              twopas=true;
            }
        }else{
            twopas=false;
        }

        if(aq!= ""){
            if(aq==oo){
                aq=true
            }else{
                eq=false;
              $(".zhuceadd-lab").eq(4).html("安全码不正确")
            }
        }else{
            $(".zhuceadd-lab").eq(4).html("请输入安全码")
        }
        // console.log(aq);
        // console.log(oo);
        
        
// console.log(aq==oo);

if(user&&pass&&aq&&tele&&twopas){
    $.get({
        data: {
           email:emil,
           tel:tell,
           pass:pas
            
        },
        url: "../php/zhuce-add.php",
        success: function (res) {
            var res = res;
        //    console.log(res);
           
            if(res=="未注册"){
          window.location.href="http://localhost/stu/html/main.html"
               
            }
            
   

        }
    })
}

 


    })



})