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

// Funkcja filterMore5 filtruje książki, których ocena jest większa niż 5
const filterMore5 = (list) => list.filter((book) => book.rating > 5);

// Funkcja filterOdd filtruje książki, których liczba stron jest liczbą nieparzystą
const filterOdd = (list) => list.filter((book) => book.pages%2 == 1);

// Funkcja filterNumber filtruje książki, których tytuł zawiera co najmniej jedną cyfrę
const filterNumber = (list) => list.filter((book) => /\d+/.test(book.title));

// Funkcja sum zlicza liczbę książek spełniających określone warunki
const sum = (book) => book.reduce((total, book) => total + 1, 0);

// Funkcja compose łączy kilka funkcji w jedną, wykonując je w kolejności od prawej do lewej
const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

// Wywołanie funkcji compose z funkcjami filterOdd, filterNumber, filterMore5, sum
let result = compose(filterOdd, filterNumber, filterMore5, sum);

// Wyświetlenie wyniku
console.log(result(books));
