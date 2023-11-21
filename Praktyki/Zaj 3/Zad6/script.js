// Definicja tablicy obiektów reprezentujących książki
const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];
// Funkcja filter przyjmuje listę książek i filtruje tylko te, które spełniają określone warunki
const filter = (list) => list.filter((book) => book.genre.endsWith("y") && book.pages%2 == 0);

// Funkcja sum przyjmuje listę książek i zwraca sumę liczby liter w tytułach książek (bez spacji)
const sum = (book) => book.reduce((totalLetters, book) => totalLetters + book.title.replace(/\s/g, '').length, 0);

// Funkcja compose łączy kilka funkcji w jedną, wykonując je w kolejności od prawej do lewej
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// Wywołanie funkcji compose z funkcjami filter i sum oraz przekazanie tablicy books jako argumentu
let result = compose(filter, sum);
console.log(result(books));
