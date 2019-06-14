$(function () {


    // function cheackemailortel(){

    //     var con=$(".emailortel").val();
    //       console.log(con);



    // var emil=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    // var tel=/^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/ 
    // if(con==emil){
    //     alert("dsads")
    // }
    // }
    $(".sanxing-input").focus(function () {

        $(this).stop(true).css("border-bottom", "2px solid #1428a0").siblings().css("color", "#1428a0").animate({


            "font-size": "12px",
            "line-height": "17px"

        }, 300)

    })
    $(".sanxing-input").blur(function () {
        var result = $(this).val();
        x = $.trim(result);
        if (x == "") {

            $(this).stop(true).css("border-bottom", "1px solid #cccccc").siblings().css("color", "#cccccc").animate({

                "font-size": "17px",
                "line-height": "50px"

            }, 300)
        } else {
            $(this).css("border-bottom", "1px solid #cccccc").siblings().css("color", "#cccccc")
        }

    })

    $(".ischeack").click(function () {
        $(this).toggleClass("cheack")
    })

    var user = false;
    var pass = false;
    var anquan = false;
    var tel =/^1[3456789]\d{9}$/
    var emil = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    // $("#username").blur(
    //    function()
    // {
    //  var con=$(".emailortel").val();
    //  x = $.trim(con); 
    //  if(x!=""){
    //     if(emil.test(con)||tel.test(con)){
    //        user=true;
    //       }else{
    //         user=false;

    //       }

    //  }

    // })
    var num;
    // num=Math.floor(Math.random()*9000+1000);
    $(".sanxing-dl-yanzheng-shuaxin").click(function () {

        num = Math.floor(Math.random() * 9000 + 1000);
        $(this).siblings().html(num);

        

    })



    $(".sanxing-dl-dl").click(function () {
        var em = $.trim($(".emailortel").val());
        var pa = $.trim($(".password").val());
        var aq = $.trim($("#anquanma").val());
        var oo = $(".sanxing-dl-yanzheng-yzm").text()
       
        if (em != "") {
            if (emil.test(em) || tel.test(em)) {
                user = true;
            } else {
                user = false;
                $(".divinput-thishi").eq(0).html("格式不对")
            }
        }else{
            user = false;
            $(".divinput-thishi").eq(0).html("请输入ID")

        }
        if (pa != "") {

            pass = true;
        } else {
            pass = false;
            $(".divinput-thishi").eq(1).html("请输入密码")
        }
        if(aq!= ""){
            if(aq==oo){
                aq=true
            }else{
                eq=false;
              $(".divinput-thishi").eq(2).html("安全码不正确")
            }
        }else{
            $(".divinput-thishi").eq(2).html("请输入安全码")
        }
        // console.log(aq);
        // console.log(oo);
        
        
// console.log(aq==oo);

if(user&&pass&&aq){
    $.get({
        data: {
            name:em,
            pass:pa
            
        },
        url: "../php/sanxing.php",
        success: function (res) {
            var res = res;
           if(res=="登录成功"){
           
           window.location.href="http://localhost/stu/html/dl-tz.html"
           }
           if(res=="密码错误"){
            $(".divinput-thishi").eq(1).html("密码错误")
            $(".emailortel").val("")
        }
        if(res=="用户名不存在"){
            $(".divinput-thishi").eq(0).html("用户名不存在")
        }
            

        }
    })
}

 


    })






    // console.log(user);

})