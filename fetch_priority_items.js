const mysql = require("mysql");

const handleFetchPriorityItems = (req, res, db) => {
    try{
        db.getConnection ( async (err, connection)=> {

        if (err) {
            console.error("Error getting database connection:", err);
            throw err;
        } 
        
        const sqlsearch = "SELECT Priority_items FROM commonItems";
        connection.query(sqlsearch, (err, results) => {

        if (err) {
            console.error('Error fetching items: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
      
        // Concatenate all the values into a single list
        const priorityItems = [];

        results.forEach(row => {
        priorityItems.push({ key: priorityItems.length + 1, value: row.Priority_items });
        });

        connection.release();

        console.log("Priority items list: ", priorityItems);

        // Send data to frontend
        res.json(priorityItems);
        });
    }) 
    }
    catch(err){
    console.error("Error selecting priority items from import table",err)
    res.sendStatus(409)
}
}
  
  module.exports = { handleFetchPriorityItems };