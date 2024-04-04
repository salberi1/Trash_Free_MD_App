const express = require("express");
const { connection } = require("mongoose");
const app = express();

const mysql = require ("mysql")

const db = mysql.createPool({
    connectionLimit: 100,
    host: "ls-be0604626d49390163f773633db909744f567e26.cx4c02cy8vpb.us-east-1.rds.amazonaws.com",
    user: "dbmasteruser",
    password: "Os*~UK._2yrDSxA}1}9SF4rG9O15(ASy",
    database: "userDB",
    port: "3306"

})

db.getConnection( (err, connection)=> {
    if (err) throw (err)
    console.log ("DB connected successful: " + connection.threadId)
 })
