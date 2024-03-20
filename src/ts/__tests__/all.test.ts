import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import { Genre, Country } from '../domain/types'

test('Тест Cart', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('Тест Movie', () => {
  const genre1: Genre = { id: 1, name: 'Action' };
  const country1: Country = { id: 1, name: 'USA' };
  const m = {
    id: 1,
    name: 'Inception',
    secondName: 'The Beginning',
    year: 2010,
    country: country1,
    slogan: 'Your mind is the scene of the crime',
    genres: [genre1],
    duration: 148,
    imgURL: 'https://example.com/inception.jpg',
    price: 10,
  }
  const movie1 = new Movie(
    m.id,
    m.name,
    m.secondName,
    m.year,
    m.country,
    m.slogan,
    m.genres,
    m.duration,
    m.imgURL,
    m.price
  );

  expect(movie1.id).toStrictEqual(m.id);
  expect(movie1.name).toStrictEqual(m.name);
  expect(movie1.secondName).toStrictEqual(m.secondName);
  expect(movie1.year).toStrictEqual(m.year);
  expect(movie1.country).toStrictEqual(m.country);
  expect(movie1.slogan).toStrictEqual(m.slogan);
  expect(movie1.genres).toStrictEqual(m.genres);
  expect(movie1.duration).toStrictEqual(m.duration);
  expect(movie1.imgURL).toStrictEqual(m.imgURL);
  expect(movie1.price).toStrictEqual(m.price);
});

test('Тест add to Cart', () => {
  const genre1: Genre = { id: 1, name: 'Action' };
  const country1: Country = { id: 1, name: 'USA' };
  const m = {
    id: 1,
    name: 'Inception',
    secondName: 'The Beginning',
    year: 2010,
    country: country1,
    slogan: 'Your mind is the scene of the crime',
    genres: [genre1],
    duration: 148,
    imgURL: 'https://example.com/inception.jpg',
    price: 10,
  }
  const movie1 = new Movie(
    m.id,
    m.name,
    m.secondName,
    m.year,
    m.country,
    m.slogan,
    m.genres,
    m.duration,
    m.imgURL,
    m.price
  );

  const cart = new Cart();
  cart.addItem(movie1);
  expect(cart.items).toStrictEqual([movie1])
});

test('Тест totalPrice', () => {
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

  expect(cart.totalPrice()).toEqual(62);
})

test('Тест totalPriceWithDiscount 50%', () => {
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

  expect(cart.totalPriceWithDiscount(50)).toEqual(31);
})

test('Тест removeItem with id 4', () => {
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

  const trueList = [movie1, movie2, movie3, movie5]

  const cart = new Cart();

  for (let i = 1; i <= 5; i++) {
    cart.addItem(eval(`movie${i}`));
  }

  cart.removeItem(4);

  expect(cart.items).toStrictEqual(trueList);
})

test('Тест removeItem c несуществующим id 10  ', () => {
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

  const trueList = [movie1, movie2, movie3, movie4, movie5]

  const cart = new Cart();

  for (let i = 1; i <= 5; i++) {
    cart.addItem(eval(`movie${i}`));
  }

  cart.removeItem(10);

  expect(cart.items).toStrictEqual(trueList);
})