const { User } = require('../models');
const bcrypt = require('bcrypt');

class AuthService {
    async login(username, password) {
        return new Promise(async (resolve, reject) => {
            const user = await User.findByUsername(username);
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        resolve(true);
                    } else {
                        reject('Invalid username/password');
                    }
                });
            } else {
                reject('Invalid username/password');
            }
        });
    }

    async signup(username, password, name = undefined) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, async (err, hash) => {
                const user = new User({
                    username,
                    password: hash,
                    name
                });

                try {
                    if (await user.save()) {
                        resolve(true);
                    }
                } catch(e) {
                    reject(e.message);
                }
            });
        });
    }
}

module.exports = AuthService;