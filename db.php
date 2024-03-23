<?php
$conn = mysqli_connect('localhost', 'trashfreeMD', '');
$database = mysqli_select_db($conn, 'loginDB');

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true); //$encodedData variable stores the data that is taken from the front end.

//The 1st parameter of the $decodedData variable, specifies the value to be decoded. 
//The second parameter is a boolean in which the returned object will be converted into an associative array