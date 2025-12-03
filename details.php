<?php
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === "user" && $password === "1234") {
    header("Location: side_bar.html");
    exit;
}
if($username === "admin" && $password === "123"){
    header("Location: admins.html");
    exit;
}
echo"Invalid Username or Password"
?>
