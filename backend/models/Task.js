const db = require('../lib/db');

const TaskSchema = {
    id: {
        required: false,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String
    },
    tags: {
        required: false,
        type: Array
    },
    user_id: {
        required: true,
        type: String
    },
    date: {
        required: false,
        type: Date
    },
    deadline: {
        required: false,
        type: Date
    },
    automatic: {
        required: true,
        type: Boolean
    },
    from_time: {
        required: false,
        type: String
    },
    to_time: {
        required: false,
        type: String
    },
    priority: {
        required: false,
        type: String
    },
    estimated_time: {
        required: false,
        type: String
    }
};

function Task(options) {
    for (key of Object.keys(TaskSchema)) {
        if (Object.keys(options).includes(key)) {
            this[key] = options[key];
        } else {
            if (TaskSchema[key].required) {
                throw new Error(`${Task.name} has required \`${key}\``);
            }
        }
    }
};

Task.findAll = async function() {
    const { rows } = await db.query('SELECT * FROM Tasks');
    const Tasks = new Set();
    
    if (rows) {
        for (let row of rows) {
            Tasks.add(new Task(row));
        }
    }

    return Tasks;
};

Task.findById = async function(id) {
    const { rows } = await db.query(`
        SELECT *
        FROM Tasks
        WHERE id = '${id}'
    `);

    if (rows.length > 0) {
        return new Task(rows[0]);
    }
};

Task.findByUserId = async function(id) {
    const { rows } = await db.query(`
        SELECT *
        FROM Tasks
        WHERE user_id = '${id}'
    `);

    const Tasks = new Set();
    
    if (rows) {
        for (let row of rows) {
            row.user_id = id;
            Tasks.add(new Task(row));
        }
    }

    return Tasks;
};

Task.prototype.save = async function() {
    const keys = [...Object.keys(this)].join(', ');
    const items = [...Object.values(this)];
    const values = [...Object.keys(this)].map((_, idx) => `$${idx + 1}`).join(', ');

    const { rows } = await db.query(`
        INSERT INTO Tasks (${keys})
        VALUES (${values})
        RETURNING id
    `, items);

    this.id = rows[0].id;
    return this;
};

Task.prototype.drop = async function() {
    await db.query(`
        DELETE FROM Tasks
        WHERE id='${this.id}'
    `);
};

module.exports = Task;