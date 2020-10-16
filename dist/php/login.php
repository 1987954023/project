<?php
header("Content-type:text/html;charset=utf-8");
$arr=array("code"=>0,"msg"=>"");
$username=$_POST['username'];
$password=$_POST['password'];
//链接数据库
$link=mysql_connect('127.0.0.1',"root","123456");
if(!$link){
    echo "链接失败";
    exit;
}
mysql_set_charset('utf8');
mysql_select_db("huawei");
$sql1="select * from user where username='{$username}'";
$res1=mysql_query($sql1);
$row1=mysql_fetch_assoc($res1);
if($row1){
    $arr['code']=4;
    $arr['msg']="用户名已存在";
    echo json_encode($arr);
    exit;
}
$str=md5(md5(md5($password).'qingdao').'qiangfeng');
$sql2="insert into user(username,password) values ('{$username}','{$str}')";
$res2=mysql_query($sql2);
if($res2){
    $arr['code']=0;
    $arr['msg']="注册成功";
    echo json_encode($arr);
    exit;
}
mysql_close($link);
?>