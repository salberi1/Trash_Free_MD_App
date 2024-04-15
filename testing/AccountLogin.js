//LOGIN (AUTHENTICATE USER)


const bcrypt = require("bcrypt");
const mysql = require("mysql");

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
        res.send(`${username} is logged in!`)
        } 
        else {
        console.log("---------> Password Incorrect")
        res.send("Password incorrect!")
        } //end of bcrypt.compare()
      }//end of User exists i.e. results.length==0
     }) //end of connection.query()
    }) //end of db.connection()
    } //end of app.post()
  catch(err){
    console.error("Server connection error",err)
    res.sendStatus(410)

  }
    
  }
  
    module.exports = {userLogin}; 
    