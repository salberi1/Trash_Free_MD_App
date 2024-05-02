const {userLogin} = require('./AccountLogin.js');
const {cleanupLocation} = require('./cleanup_Location_Handler.js')

const express = require("express")
const app = express()
const mysql = require("mysql")
require("dotenv").config()

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT

})

db.getConnection( (err, connection)=> {
    if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)
 })

 const port  = process.env.port

 app.listen(port, ()=> console.log('serverStarted on port ${port}...'))

 app.use(express.json());

 app.post("/createUser", async (req, res) => {
    try {
      const { username, password, email, mobile, first_name, last_name } = req.body;
  
      const result = await createUser(db, username, password, email, mobile, first_name, last_name, res);

    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error (Backend)");
    }
  });
 
 app.post("/userLogin", async (req,res)=>{
    try{
        const {username, password} = req.body;

        const result = await userLogin(db,username,password,res)
    }

    catch (error){
        console.error("Error logging in:",error)
        res.status(500).send("Internal Server error")
    }
 });

 app.post("/cleanupLocation", async (req,res)=>{
    try{
        const {user_id,date, time,location} = req.body;

        const result = await cleanupLocation(db,user_id,date,time,location,res)
    }

    catch (error){
        console.error("Error logging in:",error)
        res.status(500).send("Internal Server error")
    }
 });
