$(function () {
  var ok = $("input[type=checkbox]")

  ok.eq(4).click(function () {

    if ($(this).prop("checked")) {
      $(".checkbox-ul").children().children().attr("checked", "checked")


    } else {
      $(".checkbox-ul").children().children().removeAttr("checked")

    }



  })
  ok.click(function () {
    if (ok.eq(0).prop("checked") && ok.eq(1).prop("checked") && ok.eq(2).prop("checked") && ok.eq(3).prop("checked")) {
      ok.eq(4).attr("checked", "checked");
      $(".zc-ty").css("background", "blue");

    } else {
      ok.eq(4).removeAttr("checked")
      $(".zc-ty").css("background", "#cccccc");
    }
  })

  $(".zc-ty").click(function () {
    if (ok.eq(0).prop("checked") && ok.eq(1).prop("checked") && ok.eq(2).prop("checked") && ok.eq(3).prop("checked")) {

    }
  })


})