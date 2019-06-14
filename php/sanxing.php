<?php
header("Content-Type:text/html;charset=UTF-8");
$name=$_REQUEST["name"];
$pass=$_REQUEST["pass"];
$json=file_get_contents("../json/sanxingjson.json");


$data = json_decode($json,true);
for($i=0;$i<count($data);$i++){
    if($data[$i]["email"]==$name || $data[$i]["tel"]==$name){
      if($data[$i]["pass"]==$pass){

        echo "登录成功";
        break;
      }else{
        echo "密码错误";
        break;
      }
    }else{
    echo "用户名不存在";
    break;

    };
}






?>