$(function(){
    var sfz1= /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
    var sfz2= /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    $(".zhucexingxi-input").focus(function () {

        $(this).stop(true).css("border-bottom", "2px solid #1428a0").siblings().css({"color":"#1428a0","top":"10px"}).animate({


            "font-size": "14px",
            "line-height": "17px"

        }, 300)

    })
    $(".zhucexingxi-input").blur(function () {
        var result = $(this).val();
        x = $.trim(result);
        if (x == "") {

            $(this).stop(true).css("border-bottom", "1px solid #cccccc").siblings().css({"color": "#cccccc","bottom":"0"}).animate({

                "font-size": "22px",
                "line-height": "84px"

            }, 300)
        } else {
            $(this).css("border-bottom", "1px solid #cccccc").siblings().css("color", "#cccccc")
   
        }

    })

$("#sfz").blur(function(){
var result=$.trim($(this).val())
  if(result!=""){
    if(sfz1.test(result)||sfz2.test(result)){

    }else{
        $(".zhucexinxi-sfz-tishi").html("身份证格式错误")
    }
  }
    
    
    
})

var lastname=false;
var username=false;
var nameID=false;

$(".zhucexinxi-btn").click(function(){
    var xingshi = $.trim($("#username").val());
    var mingzhi = $.trim($("#username").val());
    var shenfenz = $.trim($("#sfz").val());
    if(xingshi!=""){
        lastname=true;
    }else{
        lastname=false;
    }

    if(mingzhi!=""){
        username=true;
    }else{
        username=false;
    }
    if(shenfenz!=""){
        if(sfz1.test(shenfenz)||sfz2.test(shenfenz)){
            nameID=true;
        }
        else{
            nameID=false;
        }
    }else{
        nameID=false;
    }



    if(lastname&&username&&nameID){
        $.get(
            {
                data:{
                    "ID":shenfenz ,
                    "name":mingzhi,
                    "lastname":lastname
                },
                url:"../php/zhuce.php",
                success:function(res){
                    console.log(res);
                    

                }
            }
        )
    }

})





 
  
})