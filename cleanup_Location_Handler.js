const mysql = require ("mysql");

// Function to create a new user
async function cleanupLocation(db, user_id, date, time, location, res) {
    try {
        
        
        db.getConnection( async (err, connection) => {

        if (err) throw (err)

        const sqlInsert = "INSERT INTO cleanups (user_id, date, time, location) VALUES (?, ?, ?, ?)";
        const insert_query = mysql.format(sqlInsert,[user_id,date,time,location])
        // ? will be replaced by values
        // ?? will be replaced by string

        // If the user doesn't exist, create a new user
        await connection.query (insert_query, (err, result) => {
                    connection.release()
                    
                    if (err) throw err;
                    console.log("--------> input user data");
                    console.log(result.insertId)
                    res.sendStatus(201);
                });
      
    
    });
   }
   catch (error) {
      console.error("Error creating user:", error);
      res.sendStatus(409);
    }
  }

  module.exports = { cleanupLocation };