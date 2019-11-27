var Borrowing = require('../src/Borrowing');

module.exports = (class Book {
    constructor(number, title, author){
        this.number = number;
        this.title = title;
        this.author = author;
        this.borrowsList = [];
        this.currentBorrowing = null;
    }

    returnBook(person) {
        if (this.isAvailable() || this.currentBorrowing.person !== person)
        {
            return false;
        }
        this.currentBorrowing = null;
        return true;
    }

    borrowBook(person, days){
        if (!this.isAvailable())
        {
            return false;
        }
        var bookFrom = new Date(Date.now());
        var bookTill = new Date(bookFrom);
        bookTill.setDate(bookFrom.getDate() + days);
        this.currentBorrowing = new Borrowing(person, bookFrom, bookTill);
        this.borrowsList.push(this.currentBorrowing);
        return true;
    }

    prolong(person, duration){
        if (this.isAvailable() || this.currentBorrowing.person !== person)
        {
            return false;
        }
        var currRetDate = this.currentBorrowing.toDate;
        var newRetDate = this.currentBorrowing.toDate.setDate(currRetDate.getDate() + duration);
        this.currentBorrowing.toDate = newRetDate;
        return true;
    }

    isAvailable(){
        return (this.currentBorrowing === null);
    }

    isOutdated(){
        return (!isAvailable() && this.currentBorrowing.toDate <= Date().now);
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