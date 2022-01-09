const db = require('../lib/db');

const UserSchema = {
  id: {
    required: false,
    type: String
  },
  username: {
    required: true,
    type: String
  },
  name: {
    required: false,
    type: String
  },
  password: {
    required: true,
    type: String
  }
};

function User(options) {
  for (const key of Object.keys(UserSchema)) {
    if (Object.keys(options).includes(key)) {
      this[key] = options[key];
    } else if (UserSchema[key].required) {
      throw new Error(`${User.name} has required \`${key}\``);
    }
  }
}

User.findAll = async function() {
  const { rows } = await db.query('SELECT * FROM Users');
  const users = new Set();

  if (rows) {
    for (const row of rows) {
      users.add(new User(row));
    }
  }

  return users;
};

User.findById = async function(id) {
  const { rows } = await db.query(`
        SELECT *
        FROM Users
        WHERE id = '${id}'
    `);

  if (rows.length > 0) {
    return new User(rows[0]);
  }
};

User.findByUsername = async function(username) {
  const { rows } = await db.query(`
        SELECT *
        FROM Users
        WHERE username = '${username}'
    `);

  if (rows.length > 0) {
    return new User(rows[0]);
  }
};

User.prototype.save = async function() {
  const { rows } = await db.query(`
        INSERT INTO Users (username, name, password)
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
};

module.exports = User;
