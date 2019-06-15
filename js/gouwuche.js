$(function(){
   
    var data =JSON.parse(localStorage.getItem("data"));
 
    
    var gwc=$(".gouwuche-con");
    function ul(){
        var res=""
        // gwc.empty();
       
       
        for(var i=0; i<data.length;i++){
          res+= `<ul class="gouwuche-con-list" data-index="${i}">
            <li class="fl"><input type="checkbox" name="" id="" class="check"></li>
            <li class="fl"><img src="" alt=""></li>
            <li class="fl">${data[i].goods}</li>
            <li class="fl">￥<span class="gouwuche-con-list-price">${data[i].price}</span></li>
            <li class="fl gouwuche-con-list-jifen">${data[i].price*data[i].number}</li>
            <li class="fl">
                <div class="gouwuche-shuliang"><span class="gouwuche-remove">-</span><span class="gouwuche-number">${data[i].number}</span><span class="gouwuche-add">+</span></div>
                <a href="" class="gouwuche-clear">删除</a>
    
            </li>
            <li class="fl gouwuche-con-list-all-li">￥<span class="gouwuche-con-list-all">${data[i].price*data[i].number}.00</span></li>
        </ul>`
    
        }
        gwc.append(res);
    }
    ul();

var check=$(".check");
var allprice=$(".gouwuche-price-allnumber");


var car=$(".gouwuche-con");
car.on("click",".check",function(){
    var allpricenumber=((allprice.html()).slice(1))*1;
//   var allpricenumber1=allprice.html();
  var index=$(this).parent().parent().attr("data-index");
  var oneprice= ($(".gouwuche-con-list").eq(index).children().eq(6).children().html())*1;
    if($(this).prop("checked")){
   
     allpricenumber+=oneprice;
     allprice.html(`￥${allpricenumber}.00`)
     $(".gouwuche-price-alljf").html(`${allpricenumber}`)
    }else{
        allpricenumber-=oneprice;
        allprice.html(`￥${allpricenumber}.00`)
        $(".gouwuche-price-alljf").html(`${allpricenumber}`)
    }

})



car.on("click",".gouwuche-remove",function(){
    var test=$(this).parent().parent().parent().children().eq(2).html();
    for(var i=0;i<data.length;i++){
        if(data[i].goods==test){
            data[i].number-=1;
            if(data[i].number<=0){
                data[i].number=1;
            }
     
            ul();
            var ojson=JSON.stringify(data);
            localStorage.setItem("data",ojson);         
        }
    }
})

car.on("click",".gouwuche-add",function(){
    var test=$(this).parent().parent().parent().children().eq(2).html();
    for(var i=0;i<data.length;i++){
        if(data[i].goods==test){
            data[i].number+=1;
            ul();
            var ojson=JSON.stringify(data);
            localStorage.setItem("data",ojson);         
        }
    }
})

car.on("click",".gouwuche-clear",function(e){
    e.preventDefault()
    var test=$(this).parent().parent().children().eq(2).html();
    for(var i=0;i<data.length;i++){
        if(data[i].goods==test){
            data.splice(i,1)
            ul();
            var ojson=JSON.stringify(data);
            localStorage.setItem("data",ojson);         
        }
    }
})
$(".gouwuche-dl-dl").click(function(){
    window.location.href="http://localhost/stu/html/denglu.html"
})









})