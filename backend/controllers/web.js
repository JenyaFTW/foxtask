const path = require('path');

exports.getSPA = (req, res) => {
    res.sendFile('index.html',
        {
            root: path.join(__dirname, '..', '..', 'frontend', 'dist')
        }
    );
};