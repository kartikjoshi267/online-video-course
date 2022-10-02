import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers['auth-token'];
        if (!authHeader) {
            return res.status(401).json({ "message": "Please use a valid authentication token" });
        }

        const token_verification = jwt.verify(authHeader, process.env.JWT_SECRET_STRING);
        req.user = token_verification.user;
    } catch (error) {
        return res.status(500).send({ message: "Internal Server error occured" });
    }
    next();
}

export default authenticate;