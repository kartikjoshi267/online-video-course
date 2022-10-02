import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/InstructorModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authentication from '../middleware/authentication.js';
const router = Router();
const JWT_SECRET_STRING = process.env.JWT_SECRET_STRING;

// ROUTE 1 : Creating a user by POST: /auth/register. No login required
router.post('/register', [
    body('name', 'Name should of minimum 3 characters').isLength({ min: 3 }),
    body('email', 'Email should be a valid email').isEmail(),
    body('password', 'Password should be strong and should contain atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {

    // If credentials for creating a user are not valid based on the given criterion, then send a BAD REQUEST
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({ message: "User with same email already exists" });
        }

        // Encrypting the password to secure it
        const salt = await bcryptjs.genSalt(10);
        const securedPassword = await bcryptjs.hash(req.body.password, salt);

        // Creating a new user in DB
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPassword
        })

        res.status(200).json({ "msg": "User successfully created" });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server error occured" });
    }

})

// ROUTE 2 : Logging in a user by POST: /auth/login. No login required
router.post('/login', async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "Currently no user with this email address found" });
        }

        const password_compare = await bcryptjs.compare(req.body.password, user.password);
        if (!password_compare) {
            return res.status(401).json({ message: "Please login with valid credentials" });
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(payload, JWT_SECRET_STRING);

        res.status(200).json({ authtoken });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server error occured" });
    }
})

// ROUTE 3 : Fetching the details of a user by POST : /auth/getuser. Login Required
router.post('/getuser', authentication, async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).send({ message: "Internal Server error occured" });
    }
})

export default router;