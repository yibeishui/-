$(function () {
    $.ajax({
        url: "../json/listjson.json",
        success: function (res) {
            var res = res;

            function onel() {
                var dt = `<dt><a href="">${res.peijian.left.title}</a></dt>`
                for (var i = 0; i < res.peijian.left.onelist.length; i++) {
                    dt += `<dd><a href="${res.peijian.left.onelist[i].href}">${res.peijian.left.onelist[i].con}</a></dd>`
                }
                return dt;
            }
            $(".listmain-bottom-left-oneinside").html(onel());
            function twol() {
                var li = ""
                for (var i = 0; i < res.peijian.left.price.length; i++) {
                    li += `<li><span></span>${res.peijian.left.price[i]}</li>`
                }

                return li;
            }
            $(".listmain-bottom-left-twoinside").html(twol());

            function threel() {
                var li = ""
                for (var i = 0; i < res.peijian.left.color.length; i++) {
                    li += `<li class="fl" style="background:${res.peijian.left.color[i]}"></li>`
                }
                return li;
            }

            $(".listmain-bottom-left-threeinside").html(threel());

            function rightone() {
                var li = "";
                for (var i = 0; i < res.peijian.right.length; i++) {
                    var nn = "";
                    for (var j = 0; j < res.peijian.right[i].color.length; j++) {
                        nn += `<a href="" style="background:${res.peijian.right[i].color[j]}"></a>`
                    }
                    if(res.peijian.right[i].oldprice!=""){
                    li += `<li>
                            <a class="listmain-big" href="${res.peijian.right[i].href}">
                                <img src="${res.peijian.right[i].src[0]}" alt="" class="listmain-big">
                            </a>
                            <div class="listmain-color">${nn}</div>                  
                            <p class="listmain-con"><a href="">${res.peijian.right[i].con}</a></p>
                            <p class="listmain-price listmain-pricenew">${res.peijian.right[i].price}<span class="listmain-oldprice">${res.peijian.right[i].oldprice}</span></p>
                            <img class="listyouhui" src="${res.peijian.right[i].youhui}" alt="">
                        </li>`
                    }else{
                        li+=`<li>
                        <a class="listmain-big" href="${res.peijian.right[i].href}">
                            <img src="${res.peijian.right[i].src[0]}" alt="" class="listmain-big">
                        </a>
                        <div class="listmain-color">${nn}</div>                  
                        <p class="listmain-con"><a href="">${res.peijian.right[i].con}</a></p>
                        <p class="listmain-price">${res.peijian.right[i].price}</p>
                        <img class="listyouhui" src="${res.peijian.right[i].youhui}" alt="">
                    </li>`
                    }

                }
              
                
                return li;

            }
            $(".listmain-bottom-right-ul").html(rightone());

        }



    })
})