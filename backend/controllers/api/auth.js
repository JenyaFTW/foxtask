'use strict';

const AuthService = require('../../services/auth');

const authService = new AuthService();

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const token = await authService.login(username, password);
        if (token) {
            res.status(200).json({ token });
        }
    } catch(e) {
        res.status(401).json({ message: e });
    }
};

exports.postSignup = async (req, res) => {
    const { username, password, name } = req.body;
    try {
        if (await authService.signup(username, password, name)) {
            res.status(200).json({ message: 'Successfully registered user' });
        }
    } catch (e) {
        res.status(400).json({ message: e });
    }
};

exports.getMe = async (req, res) => {
    try {
        const user = await authService.find(res.locals.username);
        if (user) {
            res.status(200).json(user);
        }
    } catch (e) {
        res.status(400).json({ message: e });
    }
};