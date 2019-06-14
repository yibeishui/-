$(function(){
   
    var data =JSON.parse(localStorage.getItem("data"));
    console.log(data);
    
    var gwc=$(".gouwuche-con");
    var res=""
    for(var i=0; i<data.length;i++){
      res+= `<ul class="gouwuche-con-list">
        <li class="fl"><input type="checkbox" name="" id="" class="check"></li>
        <li class="fl"><img src="" alt=""></li>
        <li class="fl">${data[i].goods}</li>
        <li class="fl">￥<span class="gouwuche-con-list-price">${data[i].price}</span></li>
        <li class="fl gouwuche-con-list-jifen">${data[i].price}</li>
        <li class="fl">
            <div class="gouwuche-shuliang"><span class="gouwuche-remove">-</span><span class="gouwuche-number">1</span><span class="gouwuche-add">+</span></div>
            <a href="" class="gouwuche-clear">删除</a>

        </li>
        <li class="fl">￥<span class="gouwuche-con-list-all">${data[i].price}.00</span></li>
    </ul>`

    }
    gwc.append(res)




















})