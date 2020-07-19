const fakeDatabase = require('../config/fake_database');

/**
 * Sends the response with all books in fake_database in json format.
 * @param {object} req Client request.
 * @param {object} res Server response.
 */
const getBooks = (req, res) => {
    res.status(200)
        .json(fakeDatabase.getBooks());
}

/**
 * Sends the response with the book thar matches.
 * @param {object} req Client request.
 * @param {object} res Server response.
 */
const getBookByName = (req, res) => {
    const { bookName } = req.params;
    res.status(200)
        .json(fakeDatabase.getBookByName(bookName) || {});
}

/**
 * Show message when client requests the root page.
 * @param {object} req Client request.
 * @param {object} res Client response.
 */
const rootPage = (req, res) => {
    res.status(200)
        .send({ message: 'Welcome to the books library API' });
}

module.exports = {
    getBooks,
    getBookByName,
    rootPage
};