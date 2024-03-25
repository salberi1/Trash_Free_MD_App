<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = ($decodedData['Password']);

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";

//creates a query to search for the email the user inputs
$exeSQL = mysqli_query($conn,$SQL);

//this line sets checkEmail to the number of rows passed through to find the index of email
$checkEmail = mysqli_num_rows($exeSQL);

/*in the case checkEmail is zero the email is not in the database so no account is associated with it.
  In the case the email is inside the data base it fetches the row the email is in and checks if the password
  the user provided matches the one in the database. The Message displayed is then adjusted based on correctness
  of input.
*/
if($checkEmail != 0)
{
    $arrayu = mysqli_fetch_array($exeSQL);
    if($arrayu['UserPW'] != $UserPW)
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