<?php

header("Content-Type:text/html;charset=UTF-8");
$name=$_REQUEST["name"];
$id=$_REQUEST["ID"];
$lastname=$_REQUEST["lastname"];
$filePath="../json/sfz.json";
// 
$content = fread(fopen($filePath,"r"),filesize($filePath));

$data = json_decode($content,true);

for($i=0;$i<count($data);$i++){
    if($data[$i]["id"]==$id&&$data[$i]["lastname"]&&$data[$i]["name"]){
    echo "符合";
    // $res=array("name"=>$name,"id"=>$id,"lastname"=>$lastname);
    break;
    }else{
    echo "此身份证与姓名不符";
    break;

    };
};
// array_push($data , $res);

// 
// $handle=fopen($filePath,"w");
// fwrite($handle,json_encode($data,true));
// fclose($handle);



?>