$(function(){
     var i=0;
     var timr;
     
     var imgw=$(".nav1-ul-img").width();
     
     function timer(){
         timr= setInterval(function(){
          i++;
          if(i>=$(".nav1-ul li").length){
            i=1;
            $(".nav1-ul").css("margin-left","0");
           // $(".nav1-div span").eq(0).css("background","#4151a7").siblings().css("background","#d6d7d1")
          
        }
            $(".nav1-ul").animate({"margin-left":`-${i*imgw}`},1000); 
           ( function spancss(index){
            index=i
                if(index==$(".nav1-ul li").length-1){
                    index=0;
            }
            $(".nav1-div span").eq(index).css("background","#4151a7").siblings().css("background","#d6d7d1");
           //  $(".nav1-div span").eq(0).css("background","#4151a7").siblings().css("background","#d6d7d1")
          })()
                       
    },3000);}

    for(var i=0;i<$(".nav1-ul li").length-1;i++){
       var o= $(`<span></span>`);
        $(".nav1-div").append(o);
    };
     timer();

    $(".nav1").hover(function(){
        clearInterval(timr);
    },timer);
    
    $(".nav1-div span").click(function(){
        $(this).css("background","#4151a7").siblings().css("background","#d6d7d1");
        var index=$(this).index();
        $(".nav1-ul").animate({"margin-left":`-${index*imgw}`},1000);   
        i=index;
    });
//...............
    $.ajax({
        url:"../json/mainjson.json",
        success:function(res){
            var mainNav=res.mainNav1;
            var nn="";
            for(var i=0;i<mainNav.length;i++ ){
            nn+=` <li class="fl">
             <a href="">
              <img class="img1" src="${mainNav[i].src}" alt=""></a>
                <p class="main-nav-p1">${mainNav[i].pp}</p>
                <p class="main-nav-p2">${mainNav[i].price}</p>
               <img class="preferential" src="${mainNav[i].prefer}" alt="">

             </li>`
            }
            $(".main2-nav-ul").html(nn);
            var mainNav2=res.mainNav2;
            var mm="";
            for(var i=0;i<mainNav2.length;i++){
                mm+=` <li class="fl">
               <a href="">
                <img class="img1" src="${mainNav2[i].src}" alt=""></a>
                <p class="main-nav-p1">${mainNav2[i].pp}</p>
                <p class="main3-nav-p">${mainNav2[i].aa}</p>
                <p class="main-nav-p2">${mainNav2[i].price}<span class="main-nav-span">${mainNav2[i].oldprice}</span></p>
                <img class="preferential" src="${mainNav2[i].prefer}" alt="">
               
             </li>` 
            }
            $(".main4-nav-ul").html(mm);

            var mainNav3=res.mainNav3;
            var oo="";
            for(var i=0;i<mainNav3.length;i++){
                // console.log(mainNav3[i].aa);
            
                
                
                if(mainNav3[i].aa!=" "){
                    oo+=` <li class="fl">
                    <a href="">
                     <img class="img1" src="${mainNav3[i].src}" alt=""></a>
                     <p class="main-nav-p1">${mainNav3[i].pp}</p>
                     <p class="main3-nav-p">${mainNav3[i].aa}</p>
                     <p class="main-nav-p2">${mainNav3[i].price}<span class="main-nav-span">${mainNav3[i].oldprice}</span></p>   
                     <img class="preferential" src="${mainNav3[i].prefer}" alt="">
                  </li>` 
                }else{
                    oo+=` <li class="fl">
                    <a href="">
                     <img class="img1" src="${mainNav3[i].src}" alt=""></a>
                     <p class="main6-nav-pp">${mainNav3[i].pp}</p>
                     <p class="main-nav-p2">${mainNav3[i].price}<span class="main-nav-span">${mainNav3[i].oldprice}</span></p>   
                     <img class="preferential" src="${mainNav3[i].prefer}" alt="">
                  </li>` 
                }
               
            }
            $(".main6-nav-ul").html(oo);
        }
    })
//.........
    var settimr;
    var j=0;
    function time(){
   settimr= setInterval(function(){
        j++
        if(j>=3){
            j=0
        }
        
        $(".main2-nav-ul").css("margin-left",`-${j*1220}px`)
        $(".main2-dd1").eq(j).addClass("main2-dd").siblings().removeClass("main2-dd")
    },3000)
}
time();
// 封装函数变色 main-dd
// function p(f){  
// $(".main2-dd1").eq(f).addClass("main2-dd").siblings().removeClass("main2-1")
// }
$(".main2").hover(function(){clearInterval(settimr)},function(){
    time();
})
$(".main2-nav-div-a").click(function(e){
    e.preventDefault();
    var index=$(this).index();
    if(index==0){
        j--;
        if(j<0) j=2;
        $(".main2-nav-ul").css("margin-left",`-${j*1220}px`);
        $(".main2-dd1").eq(j).addClass("main2-dd").siblings().removeClass("main2-dd")
    }else{
        j++; 
        if(j>2) j=0;
         $(".main2-nav-ul").css("margin-left",`-${j*1220}px`);
         $(".main2-dd1").eq(j).addClass("main2-dd").siblings().removeClass("main2-dd")
    }
   
})

$(".main2-dd1").click(function(e){
//    ？??索引有问题 
    e.preventDefault();
 var index=$(this).index()-1;
 console.log(index,$(this));
  $(".main2-nav-ul").css("margin-left",`-${index*1220}px`);
  $(".main2-dd1").eq(index).addClass("main2-dd").siblings().removeClass("main2-dd");
  j=index;

})
// ........
function list(){
    var nn=""
    for(var i =0;i<$(".main3-nav-ul li").length-1;i++){
    nn+=`<li class="fl main3-small-li"><a href=""></a></li>`
    }
    return nn;
}

$(".main3-nav-small").html(list());
$(".main3-small-li").eq(0).css({
    "border":" 2px solid #a8a9ae",
    "background":"#142485"
})
var time2;
var k=0;
var wid=$(".main3-nav-ul li").width();
function Time2(){
    time2=setInterval(function(){
        k++;
       

        if(k>$(".main3-nav-ul li").length-1){
            k=1;
            $(".main3-nav-ul").css( "margin-left",0);
        }
        $(".main3-nav-ul").animate({"margin-left":`-${k*wid}`},1000);
        
        (function main3small(index){
                index=k;
                if(index==$(".main3-nav-ul li").length-1){
                   index=0;
                }
                    $(".main3-small-li").eq(index).css({
                        "border":" 2px solid #a8a9ae",
                        "background":"#142485"
                    }).siblings().css({
                        "border": "2px solid rgba(251,251,251,1)" ,
                        "background": "#a8a9ae "
                 })
            }
        )() 
    },3000)

}

Time2();

$(".main3-nav").hover(function(){
    clearInterval(time2)
},function(){
    Time2();
})

$(".main3-small-li").click(function(){
    var index=$(this).index();
    $(".main3-nav-ul").animate({"margin-left":`-${index*wid}`},1000);
    $(".main3-small-li").eq(index).css({
        "border":" 2px solid #a8a9ae",
        "background":"#142485"
    }).siblings().css({
        "border": "2px solid rgba(255,255,255,0)" ,
        "background": "#a8a9ae "
 })
})

//  main6
var l=0;
var time3;
function Time3(){
    time3=setInterval(function(){
        l++;      
        if(l>= $(".main6-nav-ul").width()/1220){
            l=0;
        }
        $(".main6-nav-ul").css("margin-left",`-${100*l}%`);
        $(".main6-dd1").eq(l).addClass("main2-dd").siblings().removeClass("main2-dd")
    },3000)
}
Time3();
$(".main6 .content").hover(function(){clearInterval(time3)},function(){
Time3()
});
 $(".main6-dd1").click(function(e){
     e.preventDefault();
     var index=$(this).index()-1;
     $(".main6-nav-ul").css("margin-left",`-${100*index}%`);
     $(".main6-dd1").eq(index).addClass("main2-dd").siblings().removeClass("main2-dd");
     l=index;

 })

 $(".main6-nav-div-a").click(function(e){
    e.preventDefault();
    var index=$(this).index();
    if(index==0){
        l--;
        if(l<0) l=3;
        $(".main6-nav-ul").css("margin-left",`-${100*l}%`);
        $(".main6-dd1").eq(l).addClass("main2-dd").siblings().removeClass("main2-dd"); 
    }else{
        l++;
        if(l>3) l=0;
        $(".main6-nav-ul").css("margin-left",`-${100*l}%`);
     $(".main6-dd1").eq(l).addClass("main2-dd").siblings().removeClass("main2-dd");
    }

 })
})