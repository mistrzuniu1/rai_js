const expect = require('chai').expect;

const Library = require('../src/Library');
const Book = require('../src/Book');
const Borrowing = require('../src/Borrowing');
const Person = require('../src/Person');

function createLibrary() {
    const hamlet = new Book("#0", "Hamlet", "Sekspir");
    const lalka = new Book("#1", "Lalka", "Prus");
	return new Library([hamlet, lalka]);
}
function createPerson() {
    return new Person("John", "Carmack");
}

describe('Person', function () {

    it('should be able to borrow a book', function () {
		const student = createPerson();
		const lalka = createLibrary().getBook("Lalka");

        expect(lalka.borrowBook(student, 4)).to.eq(true);

        expect(lalka.currentBorrowing.person).to.eq(student)
    });

    it('should not be able to borrow a book that is already borrowed', function () {
		const student = createPerson();
		const student2 = createPerson();
		const lalka = createLibrary().getBook("Lalka");

		expect(lalka.borrowBook(student2, 3)).to.eq(false);
		expect(lalka.currentBorrowing.person).to.eq(student);
	});

});
