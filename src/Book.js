module.exports = (class Book {
    constructor(number, title, author, publishDate, price, borrowing){
        this.number = number;
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.price = price;
        this.borrowing = borrowing
    }

    returnBook(person) {
        this.returnsList.push(person)
    }

    borrowBook(person){
        this.borrowsList.push(person)
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