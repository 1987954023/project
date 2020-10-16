<?php
header("Content-type:text/html;charset=utf-8");
$arr=array('code'=>0,'msg'=>"");
$username=$_POST['username'];
$password=$_POST['password'];
if(!$username){
    $arr['code']=1;
    $arr['msg']="请输入账号";
    echo json_encode($arr);
    exit;
}
if(!$password){
    $arr['code']=2;
    $arr['msg']="请输入密码";
    echo json_encode($arr);
    exit;
}
$link=mysql_connect("127.0.0.1","root","123456");
if(!$link){
    echo "连接失败";
    exit;
}
mysql_set_charset("utf8");
mysql_select_db('huawei');
$str=md5(md5(md5($password).'qingdao').'qiangfeng');
$sql="select * from user where username='{$username}' and password='{$str}'";
$res=mysql_query($sql);
 $row=mysql_fetch_assoc($res);
if(!$row){
    $arr['code']=3;
    $arr['msg']="登陆失败";
    echo json_encode($arr);
    exit;
}else{
    $arr['code']=0;
    $arr['msg']="登陆成功";
    echo json_encode($arr);
}
mysql_close($link);
?>