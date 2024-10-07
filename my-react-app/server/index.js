import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { userModel } from 'db.js';


const mongoose = require('mongoose')

const app = express();
app.use(cors());
const JWT_SECRETKEY = process.env.JWT_userModel_Password;

app.use(express.json()); // JSON parser 

// Authentication middleware to verify JWT and authorize userModels
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
        req.userModelname = decodedInformation.userModelname; // Attach decoded info to request
        next(); // Call the next middleware or route handler
    } catch (err) {
        res.status(401).send({
            message: "The token is not valid!"
        });
    }
}

app.post('/signup', async (req, res) => {
    const { userModelname, email, password, country, state, city, phoneNo } = req.body;

    // Check if the userModel has already signed up with the same userModelname or email
    const existinguserModel = await userModel.findOne({ 
          email 
    });

    if (existinguserModel) {
        return res.status(409).json({
            message: "Email already in use"
        });
    }

    // Check if password meets minimum length requirement
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long"
        });
    }

    try {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new userModel
        const newuserModel = await userModel.create({
            userModelname, 
            email,
            password: hashedPassword,
            country,
            state,
            city,
            phoneNo
        });

        res.status(201).json({
            message: "You have successfully signed up",
            userModel: newuserModel
        });
    } catch (error) {
        res.status(500).json({
            message: "Error signing up userModel",
            error: error.message
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the userModel in the "database"
    const userModel = userModels.find(u => u.email === email);

    // If userModel exists and password matches, generate token
    if (userModel && await bcrypt.compare(password, userModel.password)) {
        // Create a token with email and userModelname as payload
        const token = jwt.sign({ email: userModel.email, userModelname: userModel.userModelname }, JWT_SECRETKEY);

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

app.get('/protected-route', authenticateToken, function(req, res){
    res.json({
      message: "This is protected data",
      userModelname: req.userModelname,
    });
  });

//after this point, all the routes will the authenticate middleware
//to ensure that the correct person is using the website.

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}

main();


