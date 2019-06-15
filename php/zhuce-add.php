<?php

header("Content-Type:text/html;charset=UTF-8");

$tel=$_REQUEST["tel"];
$email=$_REQUEST["email"];
$pass=$_REQUEST["pass"];
$filePath="../json/sanxingjson.json";
// 
$content = fread(fopen($filePath,"r"),filesize($filePath));

$data = json_decode($content,true);

for($i=0;$i<count($data);$i++){
    if($data[$i]["email"]!=$email || $data[$i]["tel"]!=$tel){
    echo "未注册";
    $res=array("email"=>$email,"tel"=>$tel,"pass"=>$pass);
    break;
    }else{
    echo "已注册";
    break;

    };
};
array_push($data , $res);


$handle=fopen($filePath,"w");
fwrite($handle,json_encode($data,true));
fclose($handle);



?>