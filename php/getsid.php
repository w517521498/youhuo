<?php
include "conn.php";
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("select * from shuju1 where sid=$sid");
    echo json_encode($result->fetch_assoc());
}else{
    exit('非法操作');
}