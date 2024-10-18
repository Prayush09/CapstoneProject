import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cors from 'cors';
import { userModel, preferenceModel } from './db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

const JWT_SECRETKEY = process.env.JWT_SECRET_KEY;

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRETKEY);
        req.userName = decoded.userName;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

app.post('/signup', async (req, res) => {
    const { userName, email, password, country, state, city, phoneNo } = req.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        return res.status(409).json({ message: "Email already in use" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            userName,
            email,
            password: hashedPassword,
            country,
            state,
            city,
            phoneNo,
        });

        res.status(201).json({
            message: "Successfully signed up",
            user: newUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error signing up user",
            error: error.message,
        });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email, userName: user.userName }, JWT_SECRETKEY);

        res.json({
            message: "Logged in successfully!",
            token,
        });
    } else {
        res.status(403).json({ message: "Invalid email or password" });
    }
});

app.post('/preferences', authenticateToken, async (req, res) => {
    const preferencesData = req.body;
    const newPreferences = {
        preferences: [{
            pref1: preferencesData.pref1,
            pref2: preferencesData.pref2,
            pref3: preferencesData.pref3,
            pref4: preferencesData.pref4,
            pref5: preferencesData.pref5,
            pref6: preferencesData.pref6,
            pref7: preferencesData.pref7,
            pref8: preferencesData.pref8,
            pref9: preferencesData.pref9,
            pref10: preferencesData.pref10
        }]
    };
    try{
        await preferenceModel.create(newPreferences);
        res.status(200).send('Preferences saved successfully!');
    }catch(e){
        console.error("Some error occurred while saving the preferences!", e);
    }
});

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

main();
