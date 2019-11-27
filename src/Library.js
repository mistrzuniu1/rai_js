module.exports = (class Library {
    constructor(books){
        this.books = books;
    }

    countBorrowedBooks(){
        var borrowedBooksNum = 0;
        foreach (book in this.books)
        {
            if (!book.isAvailable())
            {
                borrowedBooksNum++;
            }
        }
        return borrowedBooksNum;
    }

    countOutdatedBooks(){
        var outDatedBooksNum = 0;
        foreach (book in this.books)
        {
            if (!book.isOutdated())
            {
                outDatedBooksNum++;
            }
        }
        return outDatedBooksNum;
    }

    isAvailable(bookNumber){
        foreach (book in this.books)
        {
            if (book.number == bookNumber)
            {
                return book.isAvailable();
            }
        }
        return null;
    }

    whenWillBeAvailable(bookNumber){
        foreach (book in this.books)
        {
            if (book.number == bookNumber)
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

    getAvailableBook(bookName){
        foreach (book in this.books)
        {
            if (book.name == bookName && book.isAvailable())
            {
                return book;
            }
        }
        return null;
    }
});