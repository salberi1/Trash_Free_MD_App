const mysql = require("mysql");

const handleFetchCommonItems = (req, res, db) => {
    try{
        db.getConnection ( async (err, connection)=> {

        if (err) {
            console.error("Error getting database connection:", err);
            throw err;
        } 
        
        const sqlsearch = "SELECT Plastic, Styrofoam, Glass, Aluminum, Paper, Cardboard, Other FROM commonItems";
        connection.query(sqlsearch, (err, results) => {

        if (err) {
            console.error('Error fetching items: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
      
        // Concatenate all the values into a single list
        const commonItems = [];
        
        results.forEach(row => {
            commonItems.push({ key: commonItems.length + 1, value: row.Plastic });
            commonItems.push({ key: commonItems.length + 1, value: row.Styrofoam });
            commonItems.push({ key: commonItems.length + 1, value: row.Glass });
            commonItems.push({ key: commonItems.length + 1, value: row.Aluminum });
            commonItems.push({ key: commonItems.length + 1, value: row.Paper });
            commonItems.push({ key: commonItems.length + 1, value: row.Cardboard });
            commonItems.push({ key: commonItems.length + 1, value: row.Other });
        });
    
        connection.release();

        console.log("Common items list: ", commonItems);

        // Send data to frontend
        res.json(commonItems);
        });
    }) 
    }
    catch(err){
    console.error("Error selecting common items from import table",err)
    res.sendStatus(409)
}
}
  
  module.exports = { handleFetchCommonItems };