import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const app = express();
const JWT_SECRETKEY = "ThisisourCapstoneProject7864";

app.use(express.json()); // JSON parser 

const users = []; // our database to store users for now

// Authentication middleware to verify JWT and authorize users
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization; // Get the Authorization header
    const token = authHeader && authHeader.split(' ')[1]; // Split "Bearer <token>" and take the token part

    if (!token) {
        return res.status(401).send({
            message: "The token is missing"
        });
    }

    try {
        const decodedInformation = jwt.verify(token, JWT_SECRETKEY); // Verify the token
        req.username = decodedInformation.username; // Attach decoded info to request
        next(); // Call the next middleware or route handler
    } catch (err) {
        res.status(401).send({
            message: "The token is not valid!"
        });
    }
}

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if the user has already signed up
    if (users.find(u => u.username === username)) {
        return res.status(200).json({
            message: "You have already signed up"
        });
    }

    if (password.length < 6) {
        return res.json({
            message: "Enter a longer password!"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username,
        email,
        password: hashedPassword
    });

    res.json({
        message: "You have successfully signed up"
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user in the "database"
    const user = users.find(u => u.email === email);

    // If user exists and password matches, generate token
    if (user && await bcrypt.compare(password, user.password)) {
        // Create a token with email and username as payload
        const token = jwt.sign({ email: user.email, username: user.username }, JWT_SECRETKEY);

        // Send success response with token
        res.json({
            message: "You have logged in!",
            token
        });
    } else {
        // Send error response if login fails
        res.status(403).send({
            message: "Invalid email or password"
        });
    }
});

//after this point, all the routes will the authenticate middleware
//to ensure that the correct person is using the website.

app.listen(3000, () => {
    console.log("Server started on port 3000");
});

