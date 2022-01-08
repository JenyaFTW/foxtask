'use strict';

const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
    async login(username, password) {
        return new Promise(async (resolve, reject) => {
            const user = await User.findByUsername(username);
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        resolve(jwt.sign({ username }, process.env.JWT_SECRET));
                    } else {
                        reject('Invalid username/password');
                    }
                });
            } else {
                reject('Invalid username/password');
            }
        });
    }

    async signup(username, password, name = null) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, async (err, hash) => {
                const user = new User({
                    username,
                    password: hash
                });

                if (name) user.name = name;

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

    async find(username) {
        const user = await User.findByUsername(username);
        if (user) {
            return {
                username: user.username,
                name: user.name
            };
        } else {
            throw new Error('No such user');
        }
    }
}

module.exports = AuthService;