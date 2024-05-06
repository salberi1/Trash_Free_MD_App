const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // Extract the token from the Authorization header

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.sendStatus(401); // Unauthorized if no Authorization header provided
    }

    const token = authHeader.split(' ')[1]; // Extract the token part

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.sendStatus(403); // Forbidden if token verification fails
        }
        
        req.user = decoded; // Attach decoded token payload to the request object
        console.log(req.user);
        next();
    });
}

module.exports = authenticateToken;