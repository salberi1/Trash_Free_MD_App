const bcrypt = require("bcrypt");
const mysql = require ("mysql");
const jwt = require("jsonwebtoken");

// Function to create a new user
async function createUser(db, username, password, email, mobile, first_name, last_name, res) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.getConnection( async (err, connection) => {

        if (err) {
            console.error("Error getting database connection:", err);
            throw err;
        }

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
                await connection.query(insert_query, async (err, result) => {
                    connection.release();
                
                    if (err) throw err;

                    console.log("--------> Created new User");
                    console.log("Inserted ID:", result.insertId);

                    // Fetch user data from the database
                    const getUserQuery = "SELECT * FROM UserTable WHERE user_id = ?";
                    const getUserParams = [result.insertId];

                    await connection.query(getUserQuery, getUserParams, (getUserErr, userResult) => {
                        if (getUserErr) throw getUserErr;

                        // Construct userInfo object with fetched user data
                        const userInfo = {
                            userId: userResult[0].user_id,
                            username: userResult[0].username,
                            firstName: userResult[0].first_name,
                            lastName: userResult[0].last_name
                        };

                        // Generate JWT token using user's information
                        const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '2M' });

                        // Send token back to the client
                        res.status(201).json({ token });
                    });
                });
      }
    });
    });
   }
   catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Something went wrong. Please try again later");
    }  
  }

  module.exports = { createUser };