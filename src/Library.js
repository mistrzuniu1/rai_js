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
        for (var i = 0; i < this.books.length; i++)
        {
            var book = this.books[i];
            if (book.number === bookNumber)
            {
                return book.isAvailable();
            }
        }
        return null;
    }

    whenWillBeAvailable(bookNumber){
        for (var i = 0; i < this.books.length; i++)
        {
            var book = this.books[i];
            if (book.number === bookNumber)
            {
                return book.whenWillBeAvailable();
            }
        }
        return null;
    }

    getTopTenBorrowed(){
        var sorted = this.books.sort(function(a, b) {
            var cmp = a.borrowsList.length < b.borrowsList.length? -1 : 1; 
            return cmp;
        });
        return sorted.slice(0, 10);
    }

    getAvailableBook(bookTitle){
        for (var i = 0; i < this.books.length; i++)
        {
            var book = this.books[i];
            if (book.title === bookTitle && book.isAvailable())
            {
                return book;
            }
        }
        return null;
    }
});