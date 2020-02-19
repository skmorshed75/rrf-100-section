<?php
include('db-con.php');

if(isset($_POST['form_login'])){
	if(empty($_POST['uid'])){
		throw new Exception('User ID cannot be empty');
	}
	if(empty($_POST['upass'])){
		throw new Exception('Password cannot be empty');
	}
	
	
}
?>








<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
</head>
<body>
	<table>
		<tr>
			<td>User ID :</td>
			<td><input type="text" name="uid" id=""></td>
		</tr>
		<tr>
			<td>Password</td>
			<td><input type="password" name="upass" id=""></td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="" name="form_login"></td>
		</tr>
	</table>
</body>
</html>