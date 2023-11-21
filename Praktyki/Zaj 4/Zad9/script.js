// Tworzenie obietnicy za pomocą obiektu Promise
const myPromise = new Promise((resolve) => {
    // Ustawienie timera, który rozwiąże obietnicę po 5 sekundach
    setTimeout(() => resolve("Udało się"), 5000);
})

// Obsługa rezultatu obietnicy po jej rozwiązaniu za pomocą metody then
myPromise
.then(console.log);
