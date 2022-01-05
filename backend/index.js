require('dotenv').config();
require('./lib/db');

const server = require('./lib/server');
const models = require('./models');

const { PORT } = process.env || 3000;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

const newUser = new models.User({
    id: 3,
    username: 'Slava',
    password: 'SussyBaka123'
});

(async () => {
    const user = await models.User.findByUsername('Kolya');
    
    console.log(user);
})();