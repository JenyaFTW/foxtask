exports.any = (req, res) => {
    res.status(400).send('You weren\'t supposed to see this.');
};