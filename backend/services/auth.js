const { User } = require('../models');

class AuthService {
    async login(username, password) {
        const user = await User.findByUsername(username);
        if (user) {
            if (user.password === password) {
                return true;
            } else {
                throw new Error('Invalid username/password');
            }
        } else {
            throw new Error('Invalid username/password');
        }
    }

    async signup(username, password, name = undefined) {
        const user = new User({
            username,
            password,
            name
        });

        try {
            if (await user.save()) {
                return true;
            }
        } catch(e) {
            throw new Error(e.message);
        }
    }
}

module.exports = AuthService;