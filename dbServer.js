const express = require("express");
const { connection } = require("mongoose");
const app = express();
const { createUser } = require('./create_account_handler.js');

const mysql = require ("mysql")

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

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))

// Middleware to parse JSON requests
app.use(express.json());

// Route to create a new user
app.post("/createUser", async (req, res) => {
    try {
      const { username, password, email, mobile, first_name, last_name } = req.body;
  
      const result = await createUser(db, username, password, email, mobile, first_name, last_name, res);

    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error");
    }
  });