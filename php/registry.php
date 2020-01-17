<?php

include "conn.php";

if(isset($_POST['username'])){
    $user=$_POST['username'];
    $result=$conn->query("select * from user where username='$user'");
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
}


if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=$_POST['password'];


    $conn->query("insert user values(null,'$username','$password',NOW()) ");
    header('location:http://10.31.152.47/erjieduan/Project.chenhao/YoHoProject/src/login.html');
}