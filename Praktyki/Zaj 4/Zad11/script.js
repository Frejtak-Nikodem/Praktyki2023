// Funkcja sprawdzająca stan odpowiedzi
const check = (response) => {
    if (response.status == 200) {
        return response.json(); // Zwraca dane w formacie JSON
    } else {
        throw new Error('Błąd w pobieraniu danych'); // Rzuca błąd, jeśli status odpowiedzi nie wynosi 200
    }
};

// Funkcja do wyświetlania danych JSON w konsoli
const print = (dataJSON) => {
    for (const post of dataJSON) {
        console.log('Title:', post.title);
        console.log('Body:', post.body);
        console.log('\n');
    }
};

// Pobieranie danych z pierwszego URL
fetch('https://jsonplaceholder.typicode.com/posts') // Bez błędu
    .then(check)
    .then(print)
    .catch(error => console.error('Wystąpił błąd:', error));

// Pobieranie danych z drugiego URL
fetch('https://jsonplaceholder.typicode.com/posts2') // Z błędem (np. brak zasobu)
    .then(check)
    .then(print)
    .catch(error => console.error('Wystąpił błąd:', error));
