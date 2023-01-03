import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token.js'
import User from '../model/user.js';

dotenv.config();

export const singupUser = async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // const user = { username: req.body.username, name: req.body.name, password: hashedPassword }
        const user = { username: req.body.username, name: req.body.name, email: req.body.email, password: hashedPassword }

        const newUser = new User(user);
        await newUser.save();

        return res.status(200).json({ msg: 'SignUp successful'});
    } catch (error) {
        return res.status(500).json({ msg: 'Error while signUp' });
    }
}


export const loginUser = async (req, res) => {
    const {username, password} = req.body;
    let user = await User.findOne({ username: username });
    if (!user) {
        return res.status(400).json({ msg: 'Username does not match' });
    }

    try {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
            const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
            const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            
            const newToken = new Token({ token: refreshToken });
            await newToken.save();
        
            res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,name: user.name, username: user.username });
        
        } else {
            res.status(400).json({ msg: 'Password does not match' })
        }
    } catch (error) {
        res.status(500).json({ msg: 'Error While Login' })
    }
}

export const logoutUser = async (req, res) => {
    const token = req.body.token;
    await Token.deleteOne({ token: token });

    res.status(204).json({ msg: 'logout successfull' });
}