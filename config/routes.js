const controller = require('../controller/controller');

module.exports = (app) => {
    app.get('/', controller.rootPage);

    app.get('/books', controller.getBooks);

    app.get('/books/:bookName', controller.getBookByName);
}