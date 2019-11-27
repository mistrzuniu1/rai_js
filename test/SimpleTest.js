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

describe('Book', function () {

    it('should be able to borrow a book', function () {
		const student = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");

        expect(lalka.borrowBook(student, 4)).to.eq(true);

        expect(lalka.currentBorrowing.person).to.eq(student)
    });

    it('should not be able to borrow a book that is already borrowed', function () {
		const student = createPerson();
		const student2 = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");
		expect(lalka.borrowBook(student, 3)).to.eq(true);
		expect(lalka.borrowBook(student2, 3)).to.eq(false);

		expect(lalka.currentBorrowing.person).to.eq(student);
	});

	it('should not be able to prolong book borrowed by someone else', function () {
		const student = createPerson();
		const student2 = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");
		expect(lalka.borrowBook(student, 3)).to.eq(true);
		expect(lalka.prolong(student2, 3)).to.eq(false);
		expect(lalka.currentBorrowing.person).to.eq(student);
	});

	it('should be able to borrow a book after returning it', function () {
		const student = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");

		expect(lalka.borrowBook(student, 3)).to.eq(true);
		expect(lalka.returnBook(student)).to.eq(true);
		expect(lalka.borrowBook(student, 3)).to.eq(true);
	});

	it('should not be able to return book which is not borrowed', function () {
		const student = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");

		expect(lalka.returnBook(student)).to.eq(false);
	});


	it('should be able to prolong borrowing', function () {
		const student = createPerson();
		const lalka = createLibrary().getAvailableBook("Lalka");

		lalka.borrowBook(student, 4);

		let expectedDayAfterProlong = new Date();
		expectedDayAfterProlong.setDate(lalka.currentBorrowing.toDate + 3);

		lalka.prolong(3);
		let afterProlongDate = lalka.currentBorrowing.toDate;

		expect(afterProlongDate.getDate()).to.eq(expectedDayAfterProlong.getDate());
	});
	
	
});

describe('Library', function() {
	it('book that does not belong to library should not be available', function () {
		const student = createPerson();
		const harryPotter = createLibrary().getAvailableBook("Harry Potter");

		expect(harryPotter).to.eq(null);
	});

	it('book should not be available in library after borrowing it', function () {
		const student = createPerson();
		var library = createLibrary();
		var lalka = library.getAvailableBook("Lalka");

		expect(lalka.borrowBook(student, 3)).to.eq(true);

		lalka = library.getAvailableBook("Lalka");
		expect(lalka).to.eq(null);
	});
});


describe('Kamil', function() {
	
	it('should not be able to prolong book borrowed by someone else', function () {
		const student = createPerson();
		const student2 = new Person("John", "Carnegie");
		const lalka = createLibrary().getAvailableBook("Lalka");
		lalka.borrowBook(student, 3)
		expect(lalka.prolong(student2,2)).to.eq(false)
	});

	it('should return null if book is not available', function () {
		const lalka = createLibrary().getAvailableBook("Lalka2");
		expect(lalka).to.eq(null);
	});

	it('should return not null if book is available', function () {
		const lalka = createLibrary().getAvailableBook("Lalka");
		expect(lalka).to.not.eq(null)
	});

	it('should be able to return borrowed book', function () {
		const lalka = createLibrary().getAvailableBook("Lalka");
		const student = createPerson();
		lalka.borrowBook(student, 3)
		expect(lalka.returnBook()).to.eq(true)
		expect(lalka.isAvailable()).to.eq(true)
		
	});
});
