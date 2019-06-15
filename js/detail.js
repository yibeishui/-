$(function() {
$.ajax({
url:"../json/detailjson.json",
success:function(res){
    var res=res;  
    var li=""
for(var i=0;i<res.color[0].src.length;i++){
   li+=`<li>
    <div class="small-img">
        <img src="${res.color[0].src[i]}" />
    </div>
   </li>`
}

$(".animation03").html(li);

var magnifierConfig = {
    magnifier: "#magnifier1", //最外层的大容器
    width:572, //承载容器宽
    height: 533, //承载容器高
    moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
    zoom: 3 //缩放比例
};
var _magnifier = magnifier(magnifierConfig);
// 


}
})
var data =JSON.parse(localStorage.getItem("data"))||[];
$(".addcar").click(function(){
       
    var price=($(".detail-main1-pricelist-whatm").html()).slice(1);
    var goods=$(".detail-main1-type-con-name").html();
    if(data.length!=0){
        for(var i=0; i<data.length;i++){
            if(data[i].goods==goods){
                data[i].number+=1;
               
              
                
            }
        }

    }else{
  
        var json={
            "price":price,
            "goods":goods,
            "number":1
        }
        data.push(json)
    }


    

   
    
    var ojson=JSON.stringify(data);

    
    
   localStorage.setItem("data",ojson);

   




})

// $(".detail-main1-colorlist-ul li").click(function(){
//     var index=$(this).index();
//     console.log(index);
    
//     $.ajax({
//         url:"../json/detailjson.json",
//         success:function(res){
//              var res=res;
//              var li="";
//              for(var i=0;i<res.color[index].src.length;i++){
//                 li+=`<li>
//                 <div class="small-img">
//                 <img src="${res.color[index].src[i]}" />
//                </div>
//               </li>`
//              }
//              $(".animation03").html(li);
//             }


//     })
// })

// var magnifierConfig = {
//     magnifier: "#magnifier1", //最外层的大容器
//     width: 400, //承载容器宽
//     height: 400, //承载容器高
//     moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
//     zoom: 4 //缩放比例
// };

// var _magnifier = magnifier(magnifierConfig);

});