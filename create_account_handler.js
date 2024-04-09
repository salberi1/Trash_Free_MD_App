const bcrypt = require("bcrypt");
const mysql = require ("mysql");

// Function to create a new user
async function createUser(db, username, password, email, mobile, first_name, last_name, res) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.getConnection( async (err, connection) => {

        if (err) throw (err)

        const sqlSearch = "SELECT * FROM UserTable WHERE username = ?"
        const search_query = mysql.format(sqlSearch,[username])
        const sqlInsert = "INSERT INTO UserTable (email, username, password, mobile, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)";
        const insert_query = mysql.format(sqlInsert,[email, username, hashedPassword, mobile, first_name, last_name])
        // ? will be replaced by values
        // ?? will be replaced by string
        // Check if the user already exists

        await connection.query (search_query, async (err, result) => {

            if (err) throw err;
            console.log("------> Search Results")
            console.log(result.length)
        
            if (result.length !== 0) {
                connection.release()
                console.log("------> User already exists");
                res.sendStatus(409);
            }   
            else{
    
                // If the user doesn't exist, create a new user
                await connection.query (insert_query, (err, result) => {
                    connection.release()
                    
                    if (err) throw err;
                    console.log("--------> Created new User");
                    console.log(result.insertId)
                    res.sendStatus(201);
                });
      }
    });
    });
   }
   catch (error) {
      console.error("Error creating user:", error);
      res.sendStatus(409);
    }
  }

  module.exports = { createUser };