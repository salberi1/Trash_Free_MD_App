<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = ($decodedData['Password']);

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn,$SQL);
$checkEmail = mysqli_num_rows($exeSQL);

if($checkEmail != 0)
{
    $arrayu = mysqli_fetch_array($exeSQL);
    if($arrayu['UserPw'] != $UserPw)
    {
        $Message = "pw WRONG";
    }

    else
    {
        $Message = "Success";
    }
}

else
{
    $Message = "No account yet";
}