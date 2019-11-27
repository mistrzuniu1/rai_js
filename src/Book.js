module.exports = (class Book {
    constructor(number, title, author, publishDate, price, borrowing){
        this.number = number;
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.price = price;
        this.borrowDate = borrowDate;
        this.whoBorrowed = whoBorrowed;
    }

    returnBook(person) {
        returnsList.push(person)
    }

    borrowBook(person){
        borrowsList.push(person)
    }

    prolong(duration){
        
    }

    isAvailable(){

    }

    isOutdated(){

    }

    whenWillBeAvailable(){

    }

    getBorrower(){
        
    }
});