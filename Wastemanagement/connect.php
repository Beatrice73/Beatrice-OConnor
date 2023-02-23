<?php
$username = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$password = $_POST['password'];
$password2 = $_POST['password2'];

//database connection
$conn = new mysqli('localhost','root','','benjina');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into signup(username, email, phone, password, password2) values(?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiss",$username, $email, $phone, $password, $password2);
    $stmt->execute();
    echo "registration successfull...";
    $stmt->close();
    $conn->close();
}
?>


