$(function(){
var ok=$("input[type=checkbox]")
ok.eq(4).click(function(){

 if($(this).prop("checked")){
 $(".checkbox-ul").children().children().attr("checked","checked")
     
     
 }else{
    $(".checkbox-ul").children().children().removeAttr("checked")

 }

    

})

for(var i=0; i<ok.lenght-1;i++){
  var ok=  ok.eq(i).prop("checked");
 
     
}



})