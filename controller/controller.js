const fakeDatabase = require('../config/fake_database');

/**
 * Sends the response with all books in fake_database in json format.
 * @param {object} req Client request.
 * @param {object} res Server response.
 */
const getBooks = (req, res) => {
    res.status(200);
    res.json(fakeDatabase.getBooks());
}

/**
 * Sends the response with the book thar matches.
 * @param {object} req Client request.
 * @param {object} res Server response.
 */
const getBookByName = (req, res) => {
    const { bookName } = req.params;
    res.json(fakeDatabase.getBookByName(bookName) || {});
}

module.exports = {
    getBooks,
    getBookByName
};