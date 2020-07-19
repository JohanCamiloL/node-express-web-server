const Book = require('../model/book');

const books = [];

books.push(new Book('Book number one', 100, 1000, "Andres López"));
books.push(new Book('Book number two', 150, 1350, "Andres Pastrana"));
books.push(new Book('Book number three', 175, 1500, "Carlos Girón"));

/**
 * Returns books list
 * @returns {Array} books
 */
const getBooks = () => books;

/**
 * Returns a book by its name.
 * @param {string} bookName 
 * @returns {object} Book
 */
const getBookByName = (bookName) => books.find(book => book.name === bookName);

/**
 * Returns books with the same price as passed as parameter.
 * @param {number} price Book price
 * @returns {Array} List of books.
 */
const getBooksByPrice = (price) => books.filter(book => book.price === price);

/**
 * Returns books with the same pages number as passed as parameter.
 * @param {number} pagesNumber Book pages number.
 * @returns {Array} List of books.
 */
const getBooksByPagesNumber = (pagesNumber) => books.filter(book => book.pagesNumber === pagesNumber);

/**
 * Returns books who where writed by the author passed as argument.
 * @param {string} author Books author name.
 * @returns {Array} List of books.
 */
const getBooksByAuthor = (author) => books.filter(book => book.author === author);

module.exports = {
    getBooks,
    getBookByName,
    getBooksByPrice,
    getBooksByPagesNumber,
    getBooksByAuthor
};