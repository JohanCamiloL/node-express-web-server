class Book {
    constructor(name, pagesNumber, price, author) {
        this._name = name;
        this._pagesNumber = pagesNumber;
        this._price = price;
        this._author = author;
    }

    get name() {
        return this._name;
    }

    get pagesNumber() {
        return this._pagesNumber;
    }

    get price() {
        return this._price;
    }

    get author() {
        return this._author;
    }
}

module.exports = Book;