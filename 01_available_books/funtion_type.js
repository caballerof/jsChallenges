/**
 * Crate a function book that has the properties:
 * Title
 * Author
 * ISBN
 * numCopies
 * 
 * Add prototype function for:
 * 
 * Availability of the books, returning a message base on
 * if 0 return 'Out of stock'
 * if < 10 'Low stock'
 * Otherwise 'in stock'
 * 
 * A function to sell a book
 * it will substrack a number o books passed as argument
 * if a argument is not passed the default number will be 1
 * 
 * A function to restock inventario
 * it will receive  a argument with the number of copies
 * if an argument is no passed the default number will be 5
 */

function Book(title, author, isbn, numCopies = 0) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.numCopies = numCopies;

  Object.defineProperty(this, 'availability', {
    get() {
      switch (true) {
        case this.numCopies == 0:
          return 'Out of stock';
        case this.numCopies < 10:
          return 'Low stock';
        default:
          return 'In stock';
      }
    }
  });
}

Book.prototype.sell = function(numCopies = 1) {
  if (this.numCopies < numCopies) return 'Out of stock';

  this.numCopies -= numCopies;
}

Book.prototype.restock = function(amount = 5) {
  this.numCopies += amount;
}

const SongOfIceAndFire = new Book('Games of thrones', 'George R. R. Martin', '123456789');
console.log(SongOfIceAndFire.availability);
SongOfIceAndFire.restock(11);
console.log(SongOfIceAndFire.availability);
SongOfIceAndFire.sell(2);
console.log(SongOfIceAndFire.availability);
