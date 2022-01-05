const { User } = require('../../models');

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findByUsername(username);
    if (user) {
        if (user.password === password) {
            res.status(200).json({ message: 'Welcome' });
        } else {
            res.status(401).json({ message: 'Invalid username/password' });
        }
    } else {
        res.status(401).json({ message: 'Invalid username/password' });
    }
};

exports.postSignup = async (req, res) => {
    try {
        const user = new User(req.body);
        if (await user.save()) {
            res.status(200).json({ message: 'Successfully registered user' });
        }
    } catch (e) {
        res.status(400).json({ message: e.detail });
    }
};

exports.getMe = (req, res) => {

};