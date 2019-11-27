module.exports = (class Library {
    constructor(books){
        this.books = books;
    }

    countBorrowedBooks(){
        var borrowedBooksNum = 0;
        this.books.forEach(book => {
            if (!book.isAvailable())
            {
                borrowedBooksNum++;
            }
        });
        return borrowedBooksNum;
    }

    countOutdatedBooks(){
        var outDatedBooksNum = 0;
        this.books.forEach(book => {
            if (!book.isOutdated())
            {
                outDatedBooksNum++;
            }
        });
        return outDatedBooksNum;
    }

    isAvailable(bookNumber){
        var book = this.books.forEach(book => {
            if (book.number == bookNumber)
            {
                return book.isAvailable();
            }
        });
        return book;
    }

    whenWillBeAvailable(bookNumber){
        var book = this.books.forEach(book => {
            if (book.number == bookNumber)
            {
                return book.whenWillBeAvailable();
            }
        });
        return book;
    }

    getTopTenBorrowed(){
        var sorted = this.books.sort(function(a, b) {
            var cmp = a.borrowsList.length < b.borrowsList.length? -1 : 1; 
            return cmp;
        });
        return sorted.slice(0, 10);
    }

    getAvailableBook(bookTitle){
        var book = this.books.forEach(book => {
            if (book.title == bookTitle && book.isAvailable())
            {
                return book;
            }
        });
        return book;
    }
});