const mysql = require("mysql");

const insertCommonItems = async (db, user_id, common_items) => {
    try {
        // Check if cleanup_id and common_items are provided
        if (!user_id || !common_items || common_items.length === 0) {
            throw new Error('Cleanup ID and common items are required');
        }

        // Add prefix "0" to each common item
        const prefixedItems = common_items.map(item => `0 ${item}`);

        // Construct the insert query to insert new row
        const sqlInsert = `INSERT INTO cleanups (user_id, common_items) VALUES (?, ?)`;

        // Concatenate common items into a single string
        const concatenatedItems = prefixedItems.join(', '); // Assuming common_items is an array of strings

        // Obtain a connection from the pool
        db.getConnection((err, connection) => {
            if (err) {
                console.error("Error obtaining database connection:", err);
                throw err;
            }

            // Execute the insert query
            const insert_query = mysql.format(sqlInsert, [user_id, concatenatedItems]);
            connection.query(insert_query, (error, results) => {
                if (error) {
                    console.error(`Error inserting cleanup items for cleanup ${user_id}:`, error);
                } else {
                    console.log(`Cleanup items inserted successfully for cleanup ${user_id}`);
                }
                // Release the connection
                connection.release();
            });
        });

        return { success: true, message: 'Cleanup items inserted successfully' };

    } catch (error) {
        console.error("Error inserting cleanup items:", error);
        throw error;
    }
};

module.exports = { insertCommonItems };
