<?php
header('Content-Type: text/html; charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "123123";
$db = 'test';
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $db);

// 检测连接



if(!$conn)
{
    die("连接失败：" . mysqli_connect_error());
}

// $select_db = mysqli_select_db('test');

// if (!$select_db) {

//     die("could not connect to the db:\n" .  mysqli_error());

// }


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

    $res = mysqli_query($GLOBALS['conn'],$sql);//执行sql语句

    if (!$res) {

        die("错误描述: " . mysqli_error($GLOBALS['conn']));

    }

    $json = process($res);
    echo "{".'"msg"'.":".$json."}";

} 

function add ($listname){
    $sql = "INSERT INTO todolist (listname)  VALUES ($listname)";
    
    $res = mysqli_query($GLOBALS['conn'],$sql);
    
    if (!$res) {

        die("错误描述: " . mysqli_error($GLOBALS['conn']));

    }
    echo "{".'"id"'.":".mysqli_insert_id($GLOBALS['conn']).",".'"code"'.":"."200"."}";
} 

function del ($id){

    $res = mysqli_query($GLOBALS['conn'],"DELETE FROM todolist WHERE id = $id");

    if (!$res) {

        die("错误描述: " . mysqli_error($GLOBALS['conn']));

    }

    echo "{".'"code"'.":"."200"."}";
} 

function process($res){
    while ($row = mysqli_fetch_array($res,MYSQLI_ASSOC))
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

mysqli_close($conn);

?>