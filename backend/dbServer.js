const express = require("express");
const { connection } = require("mongoose");
const app = express();
const { createUser } = require('./create_account_handler.js');
const {userLogin} = require('./AccountLogin.js');
const {insertPriorityItems} = require('./priority_items_handler.js');
const authenticateToken = require('./middleware.js');
const { searchEmail } = require('./check_email_handler.js');
const { searchUsername } = require('./check_username_handler.js');
const { handleFetchCommonItems } = require('./fetch_common_Items.js');
const {cleanupLocation} = require('./cleanup_Location_Handler.js');
const { insertCommonItems } = require('./common_items_handler.js')
const { handleFetchPriorityItems } = require('./fetch_priority_items.js')

const cors = require("cors");

const mysql = require ("mysql");
const { checkEmail } = require("./check_email_handler.js");

app.use(cors());

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


// Endpoint to check if email exists
app.post('/checkEmail', async (req, res) => {
  try {
      const { email } = req.body;

      const result = await searchEmail(db, email, res);

  } catch (error) {
      console.error('Error checking email:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

// Endpoint to check if a username already exists
app.post('/checkUsername', async (req, res) => {
    try {
        const { username } = req.body;

        const result = await searchUsername(db, username, res);

    } catch (error) {
        console.error('Error checking username:', error);
        res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
});

// Endpoint to create a new user
app.post("/createUser", async (req, res) => {
    try {
      const { username, password, email, mobile, first_name, last_name } = req.body;
  
      const result = await createUser(db, username, password, email, mobile, first_name, last_name, res);

    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error (Backend)");
    }
  });

  // Endpoint for user login
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


  // Endpoint to autheticate and fetch user info 
  app.get('/protected-route', authenticateToken, (req, res) => {
      // Only authenticated users with valid tokens can access this route
      res.json({ message: 'You have accessed a protected route!', user: req.user });
  });


// Endpoint to fetch common items
app.get('/dropdownCommonItems', (req, res) => {

    handleFetchCommonItems(req, res, connection, db); // Use the handler function
});
  
// Endpoint to fetch priority items
app.get('/dropdownPriorityItems', (req, res) => {

    handleFetchPriorityItems(req, res, connection, db); // Use the handler function
});
  

  // Endpoint to insert individual cleanup information
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

 // Endpoint to enter priority items selection
  app.post("/insertPriorityItems", async (req, res) => {
    try {
        const { user_id, priority_items } = req.body; 
        const result = await insertPriorityItems(db, user_id, priority_items); 
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating cleanup items:", error);
        res.status(500).send("Internal Server Error (Backend)");
    }
  });

  // Endpoint to enter common items selection
  app.post("/insertCommonItems", async (req, res) => {
    try {
        const { user_id, common_items } = req.body; 
        const result = await insertCommonItems(db, user_id, common_items); 
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating cleanup items:", error);
        res.status(500).send("Internal Server Error (Backend)");
    }
  });




  //Anything below needs to be cleaned up

  /*app.post('/insertCommonItems', authenticateToken, async (req, res) => {
    const { commonItems, priorityItems } = req.body;
    const userId = req.user.userId; // Get user ID from decoded token payload

    // Insert cleanup item into database with user ID
    try {
        await db.query('INSERT INTO cleanup_items (user_id, common_items, priority_items) VALUES (?, ?, ?)', [userId, commonItems, priorityItems]);
        res.status(201).send('Cleanup item created successfully');
    } catch (error) {
        console.error('Error creating cleanup item:', error);
        res.sendStatus(500);
    }
});

  app.post("/api/user/change-password", async (req, res) => {
    try {
        const { userId, currentPassword, newPassword } = req.body;

        // Query to fetch user's password from the database
        const getPasswordQuery = "SELECT password FROM users WHERE id = ?";

        // Query to update user's password
        const updatePasswordQuery = "UPDATE users SET password = ? WHERE id = ?";

        // Get the user's current password from the database
        db.query(getPasswordQuery, [userId], async (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Internal server error" });
            }

            if (result.length === 0) {
                return res.status(404).json({ error: "User not found" });
            }

            const hashedPassword = result[0].password;

            // Compare the provided current password with the hashed password stored in the database
            if (!bcrypt.compareSync(currentPassword, hashedPassword)) {
                return res.status(401).json({ error: "Current password is incorrect" });
            }

            // Hash the new password
            const hashedNewPassword = bcrypt.hashSync(newPassword, 10);

            // Update user's password in the database
            db.query(updatePasswordQuery, [hashedNewPassword, userId], (updateErr, updateResult) => {
                if (updateErr) {
                    return res.status(500).json({ error: "Internal server error" });
                }
                res.status(200).json({ message: "Password updated successfully" });
            });
        });
    } catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}); */