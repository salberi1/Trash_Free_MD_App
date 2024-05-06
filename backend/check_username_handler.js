const mysql = require("mysql");

async function searchUsername(db, username, res) {
    try {
        const sqlSearch = "SELECT * FROM UserTable WHERE username = ?";
        const searchQuery = mysql.format(sqlSearch, [username]);

        // Obtain a connection from the pool
        db.getConnection((err, connection) => {
            if (err) {
                console.error("Error obtaining database connection:", err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            // Execute the search query
            connection.query(searchQuery, (error, results) => {
                connection.release();
                
                if (error) {
                    console.error('Error executing search query:', error);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                if (results.length !== 0) {
                    console.log("------> Username already exists");
                    return res.json({ exists: true });
                } else {
                    return res.json({ exists: false });
                }
            });
        });
    } catch (error) {
        console.error('Error checking username:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { searchUsername };