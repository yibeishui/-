$(function(){

    $(".zixun-1").click(function(e){
        e.preventDefault();     
        $(".zixun-big").css("display","block");
    })
    $(".zixun-big-guanbi").click(function(){
        $(".zixun-big").css("display","none");
    })

$(".denglu-img").on("click","img",function(){
    var index=$(this).index()
    if(index==0){
        window.location.href="http://localhost/stu/html/weixing.html"
    }
if(index==1){

}
if(index==2){
    window.location.href="http://localhost/stu/html/sanxing-dl.html"
}

})


$(".denglu-zhuce").click(function(){
    window.location.href="http://localhost/stu/html/zhuce.html"
})

    
})