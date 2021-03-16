/**
 * Write an object that takes five argumetns:
 * Title
 * Director
 * Genre
 * Release year
 * Rating
 * 
 * The prototype should be has a function called get overview
 * which logs the folowing overview for each film.
 * 
 * <movie>, a <genre> film directed by <director> was release in <releaseYear>.
 * It received a rating of <rating>.
 */
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was release in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const movie1 = new Movie('Harry Poter', 'Some dude', 'Fantasy', '2010', 9.0);

console.log(movie1.getOverview());
