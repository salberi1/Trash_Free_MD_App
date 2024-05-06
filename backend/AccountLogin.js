//LOGIN (AUTHENTICATE USER)


const bcrypt = require("bcrypt");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

async function userLogin(db, username,password,res) {
  try{
    db.getConnection ( async (err, connection)=> {
     if (err) throw (err)
     const sqlSearch = "SELECT * FROM UserTable WHERE username = ?"
     const search_query = mysql.format(sqlSearch,[username])
     await connection.query (search_query, async (err, result) => {
      connection.release()
      
      if (err) throw (err)
      if (result.length == 0) {
        console.log(username)
        console.log("--------> User does not exist")
        res.sendStatus(409);
      } 
      else {
         const hashedPassword = result[0].password
         //get the hashedPassword from result
        if (await bcrypt.compare(password, hashedPassword)) {
        console.log("---------> Login Successful")

        // Construct userInfo object with fetched user data
        const userInfo = {
          userId: result[0].user_id,
          username: result[0].username,
          firstName: result[0].first_name,
          lastName: result[0].last_name
        };

        // Generate JWT token using user's information
        const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '2M' });

        // Send token back to the client
        res.status(200).json({ token });
        } 
        else {
        console.log("---------> Password Incorrect")
        res.send("Password incorrect!")
        res.sendStatus(409);
        } //end of bcrypt.compare()
      }//end of User exists thingy (results.length==0)
     }) //end of connection.query()
    }) //end of db.connection()
    } //end of app.post()
  catch(err){
    console.error("Server connection error",err)
    res.sendStatus(409)

  }
    
  }
  
    module.exports = {userLogin}; 
    