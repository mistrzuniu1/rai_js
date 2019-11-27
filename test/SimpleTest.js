const expect = require('chai').expect;
// const Library = require('../src/Library');
// const Book = require('../src/Book');
// const Borrowing = require('../src/Borrowing');
var Person = require('../src/Person');

// import Person from "../src/Person"

		describe('canary-tests', function() 
		{
			it('should always pass the canary test', function() 
			{
				var person = new Person("John", "Obama")
				expect(person.name).to.eql("Johnn");
			});
		});