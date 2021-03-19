const Book = require('../01_available_books/class_type');

/**
 * Create a class called TechnicalBook that inherited from Book class
 * and add a property edition.
 * Add a method that returns the message:
 * The current version of this book is <editionName>
 */
class TechnicalBook extends Book {
  constructor(title, author, isbn, numCopies = 0, edition) {
    super(title, author, isbn, numCopies);
    this.editionName = edition;
  }

  get edition() {
    return `The current version of this book is ${this.editionName}`;
  }
}

const techBook1 = new TechnicalBook('JS', 'Some dude', '123456789', 10, 'First edition');
console.log(techBook1.availability);
console.log(techBook1.edition);
