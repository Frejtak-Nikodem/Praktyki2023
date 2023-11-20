const check = (response) => {
    if (response.status == 200) {
        return response.json(); // Zwraca w formacie JSON
    } else {
        throw new Error('Błąd w pobieraniu danych'); // Jeżeli status się nie zgadza, error, który jest
    }
};

const print = (dataJSON) => {
    for (const post of dataJSON) {
        console.log('Title:', post.title);
        console.log('Body:', post.body);
        console.log('\n');
    }
};

fetch('https://jsonplaceholder.typicode.com/posts') //bez error
    .then(check)
    .then(print)
    .catch(error => console.error('Wystąpił błąd:', error));

fetch('https://jsonplaceholder.typicode.com/posts2') //Z error
    .then(check)
    .then(print)
    .catch(error => console.error('Wystąpił błąd:', error));