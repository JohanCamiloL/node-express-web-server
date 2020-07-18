const express = require('express');
const fakeDatabase = require('./fake_database');

const app = express();

const PORT_NUMBER = 8000;

app.listen(PORT_NUMBER, () => {
    console.log('Server is listening on port ' + PORT_NUMBER);
});

app.get('/books', (req, res) => {
    res.status(200);
    res.json(fakeDatabase.getBooks());
});

app.get('/books/:bookName', (req, res) => {
    const { bookName } = req.params;
    res.json(fakeDatabase.getBookByName(bookName) || {});
});
