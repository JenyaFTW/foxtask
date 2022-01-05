const AuthService = require('../../services/auth');

const authService = new AuthService();

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (await authService.login(username, password)) {
            res.status(200).json({ message: 'Welcome' });
        }
    } catch(e) {
        res.status(401).json({ message: e.message });
    }
};

exports.postSignup = async (req, res) => {
    const { username, password, name } = req.body;
    try {
        if (await authService.signup(username, password, name)) {
            res.status(200).json({ message: 'Successfully registered user' });
        }
    } catch (e) {
        res.status(400).json({ message: e.message });
    }
};

exports.getMe = (req, res) => {

};