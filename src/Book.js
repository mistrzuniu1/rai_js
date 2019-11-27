var Borrowing = require('../src/Borrowing');

module.exports = (class Book {
    constructor(number, title, author, publishDate, price){
        this.number = number;
        this.title = title;
        this.author = author;
        this.borrowsList = [];
        this.currentBorrowing = null;
    }

    returnBook(person) {
        this.currentBorrowing = null;
    }

    borrowBook(person, days){
        var bookFrom = Date();
        var bookTill = bookFrom;
        bookTill.setDate(bookFrom + days);
        this.currentBorrowing = new Borrowing(person, bookFrom, bookTill);
        borrowsList.push(this.currentBorrowing);
    }

    prolong(duration){
        if (this.isAvailable())
        {
            return;
        }
        var currRetDate = this.currentBorrowing.toDate;
        var newRetDate = this.currentBorrowing.toDate.setDate()
        this.currentBorrowing.toDate
    }

    isAvailable(){
        return (this.currentBorrowing == null);
    }

    isOutdated(){
        return (!isAvailable() && this.currentBorrowing.toDate <= Date());
    }

    whenWillBeAvailable(){
        if (this.isAvailable)
        {
            return Date();
        }
        return this.currentBorrowing.toDate;
    }

    getBorrower(){
        if (this.isAvailable())
        {
            return null;
        }
        return this.currentBorrowing.person;
    }
});