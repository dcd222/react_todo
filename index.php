<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "127.0.0.1";
$username = "root";
$password = "123123";

// 创建连接
$conn = mysql_connect($servername, $username, $password);

// 检测连接
if(!$conn)
{
    die("连接失败：" . mysqli_connect_error());
}

$select_db = mysql_select_db('test');

if (!$select_db) {

    die("could not connect to the db:\n" .  mysql_error());

}


$type=$_REQUEST["type"];
if($type == "add"){
    $listname = $_REQUEST["listname"];
    add($listname);
}else if($type == "del"){
    $id = $_REQUEST["id"];
    del($id);
}else{
    get();
}

class Msg 
{
    public $id;
    public $listname;
}

function get (){
    $sql = "select * from todolist";

    $res = mysql_query($sql);//执行sql语句

    if (!$res) {

        die("could get the res:\n" . mysql_error());

    }

    $json = process($res);
    echo "{".'"msg"'.":".$json."}";

} 

function add ($listname){

    $res = mysql_query("INSERT INTO todolist (listname) VALUES ($listname)");

    if (!$res) {

        die("could get the res:\n" . mysql_error());

    }

    echo "{".'"code"'.":"."200"."}";
} 

function del ($id){

    $res = mysql_query("DELETE FROM todolist WHERE id = $id");

    if (!$res) {

        die("could get the res:\n" . mysql_error());

    }

    echo "{".'"code"'.":"."200"."}";
} 

function process($res){
    while ($row = mysql_fetch_array($res,MYSQL_ASSOC))
    {
        $msg = new Msg();
        $msg->id = $row["id"];
        $msg->listname = $row["listname"];
        $data[]=$msg;
    }
    $json = json_encode($data);//把数据转换为JSON数据.
    return $json;
}
// $row = mysql_fetch_array($res);

//关闭数据库连接

mysql_close($conn);

?>