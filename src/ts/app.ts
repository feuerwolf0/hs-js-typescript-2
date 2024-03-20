import { Genre, Country } from "./domain/types";
import Movie from "./domain/Movie";
import Cart from "./service/Cart"

const genre1: Genre = { id: 1, name: 'Action' };
const genre2: Genre = { id: 2, name: 'Comedy' };
const genre3: Genre = { id: 3, name: 'Drama' };

const country1: Country = { id: 1, name: 'USA' };
const country2: Country = { id: 2, name: 'UK' };

const movie1 = new Movie(1, 'Inception', 
'The Beginning', 2010, country1,
'Your mind is the scene of the crime', 
[genre1], 148, 'https://example.com/inception.jpg', 10);

const movie2 = new Movie(2, 'The Shawshank Redemption', 
'Redemption', 1994, country1, 
'Fear can hold you prisoner. Hope can set you free.', 
[genre3, genre2], 142, 'https://example.com/shawshank.jpg', 12);

const movie3 = new Movie(3, 'The Godfather', 
'Innocent', 1972, country2, 
'An offer you can\'t refuse', 
[genre3, genre1], 175, 'https://example.com/godfather.jpg', 15);

const movie4 = new Movie(4, 'Pulp Fiction', 
'Fiction', 1994, country2, 
'You won\'t know the facts until you\'ve seen the fiction', 
[genre1], 154, 'https://example.com/pulpfiction.jpg', 11);

const movie5 = new Movie(5, 'The Dark Knight', 
'Dark Knight', 2008, country1, 
'Why so serious?', [genre1, genre3], 
152, 'https://example.com/darkknight.jpg', 14);

const cart = new Cart();

for (let i = 1; i <= 5; i++) {
  cart.addItem(eval(`movie${i}`));
}

console.log(cart.items);

console.log(cart.items);

console.log(cart.totalPrice());
console.log(cart.totalPriceWithDiscount(50));
cart.removeItem(1);

console.log(cart.items);