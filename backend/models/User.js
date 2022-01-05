const db = require('../lib/db');

const UserSchema = {
    id: {
        required: false,
        type: Number
    },
    username: {
        required: true,
        type: String
    },
    name: {
        required: false,
        type: String,
        default: 'Personal account'
    },
    password: {
        required: true,
        type: String
    }
};

function User(options) {
    for (key of Object.keys(UserSchema)) {
        if (Object.keys(options).includes(key)) {
            this[key] = options[key];
        } else {
            if (UserSchema[key].required) {
                throw new Error(`${User.name} has required \`${key}\``);
            } else {
                if (UserSchema[key].default) {
                    this[key] = UserSchema[key].default;
                }
            }
        }
    }
};

User.sync = async function() {
    await db.query(`
        CREATE TABLE Users (
            id SERIAL,
            username varchar(255),
            name varchar(255),
            password varchar(255),
            UNIQUE(username)
        );
    `)
};

User.drop = async function() {
    await db.query('DROP TABLE Users');
};

User.findAll = async function() {
    const { rows } = await db.query('SELECT * FROM Users');
    const users = new Set();
    
    if (rows) {
        for (let row of rows) {
            users.add(new User(row));
        }
    }

    return users;
}

User.findById = async function(id) {
    const { rows } = await db.query(`
        SELECT *
        FROM Users
        WHERE id = '${id}'
    `);

    if (rows.length > 0) {
        return new User(rows[0]);
    }
}

User.findByUsername = async function(username) {
    const { rows } = await db.query(`
        SELECT *
        FROM Users
        WHERE username = '${username}'
    `);

    if (rows.length > 0) {
        return new User(rows[0]);
    }
}

User.prototype.save = async function() {
    const { rows } = await db.query(`
        INSERT INTO Users(username, name, password)
        VALUES ('${this.username}', '${this.name}', '${this.password}')
        RETURNING id
    `);

    this.id = rows[0].id;
    return this;
};

User.prototype.drop = async function() {
    await db.query(`
        DELETE FROM Users
        WHERE id='${this.id}'
    `);
}

module.exports = User;