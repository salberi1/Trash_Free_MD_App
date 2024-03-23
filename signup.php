<?php
include('db.php');

// Retrieve data from decoded JSON and sanitize inputs
//isset() makes sure that the input is not empty or NULL and is a set value
//mysqli_real_escape_string() santizes it the input meaning it backlashes any characters that seems like something used for a SQL query
$UserEmail = isset($decodedData['Email']) ? mysqli_real_escape_string($conn, $decodedData['Email']) : '';
$UserPW = isset($decodedData['Password']) ? mysqli_real_escape_string($conn, $decodedData['Password']) : '';
$Username = isset($decodedData['Username']) ? mysqli_real_escape_string($conn, $decodedData['Username']) : '';
$Mobile = isset($decodedData['Mobile']) ? mysqli_real_escape_string($conn, $decodedData['Mobile']) : '';
$FirstName = isset($decodedData['First_Name']) ? mysqli_real_escape_string($conn, $decodedData['First_Name']) : '';
$LastName = isset($decodedData['Last_Name']) ? mysqli_real_escape_string($conn, $decodedData['Last_Name']) : '';

// Hash the password securely (using bcrypt), one of the strongest
// It automatically generates a strong salt and applies the appropriate hashing algorithm.
//Note: PASSWORD_DEFAULT parameter uses the bycrpt algorithm
$hashedPassword = password_hash($UserPW, PASSWORD_DEFAULT);

// Check if the email already exists in the database
// '?' is a placeholder
$checkEmailQuery = "SELECT * FROM accountData WHERE Email = ?"; //Selects all columns from table

//using 'mysqli_prepare()' parses the query, optimizes it, and creates an execution plan
/*which can improve the efficiency of subsequent executions. It also helps prevent syntax errors 
and SQL injection vulnerabilities by separating SQL code from data.
Prepared statements help protect against SQL injection attacks by ensuring that 
user-supplied data is treated only as data, not as part of the SQL query syntax.*/
$stmtCheckEmail = mysqli_prepare($conn, $checkEmailQuery);
//Binds user-supplied data into the query safely
//data is treated as values rather than as part of the SQL syntax
mysqli_stmt_bind_param($stmtCheckEmail, "s", $UserEmail);
mysqli_stmt_execute($stmtCheckEmail);

//Storing the result for efficient retrieval of rows and processing of data
//the result set is fully available for processing without needing to maintain an open connection to the database.
mysqli_stmt_store_result($stmtCheckEmail);


//determines the number of rows returns from query
//Note: each rows in our table represent different users
if (mysqli_stmt_num_rows($stmtCheckEmail) != 0) {
    $Message = "Email already registered, try logging in";
} else {
    // Insert user data into the database using prepared statement
    $insertQuery = "INSERT INTO accountData (Username, Password, Email, Mobile, First_Name, Last_Name) 
                    VALUES (?, ?, ?, ?, ?, ?)";
    $stmtInsert = mysqli_prepare($conn, $insertQuery);
    mysqli_stmt_bind_param($stmtInsert, "ssssss", $Username, $hashedPassword, $UserEmail, $Mobile, $FirstName, $LastName);
    
    if (mysqli_stmt_execute($stmtInsert)) {
        $Message = "Registration successful";
    } else {
        $Message = "Error registering user";
    }
}

// Prepare response
$response = array("Message" => $Message);

// Send JSON response
echo json_encode($response);

// Close prepared statements and database connection
mysqli_stmt_close($stmtCheckEmail);
mysqli_stmt_close($stmtInsert);
mysqli_close($conn);