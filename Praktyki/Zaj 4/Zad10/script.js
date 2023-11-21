// Funkcja multiplyAsync przyjmuje dwa argumenty x i y, i zwraca obiekt Promise
function multiplyAsync(x, y) {
    // Tworzenie obiektu Promise z funkcją wykonawczą, która sprawdza, czy x i y są liczbami
    return myPromise = new Promise((resolve, reject) => {
        if(typeof(x) == 'number' && typeof(y) == 'number') {
            // Jeśli oba argumenty są liczbami, rozwiązuj Promise wynikiem mnożenia
            resolve(x*y);
        }
        else {
            // Jeśli przynajmniej jeden z argumentów nie jest liczbą, odrzuć Promise z odpowiednim komunikatem błędu
            reject("Niepoprawne argumenty funkcji!!!");
        }
    });
}

// Wywołanie funkcji multiplyAsync z poprawnymi argumentami (liczbami)
multiplyAsync(3,6)
.then((result) => {
    console.log("Rezultat mnożenia: "+result);
})
.catch(console.error);

// Wywołanie funkcji multiplyAsync z niepoprawnymi argumentami (co najmniej jeden z argumentów nie jest liczbą)
multiplyAsync(3,'6')
.then((result) => {
    console.log("Rezultat mnożenia: "+result);
})
.catch(console.error);
