function Calc() {
    let liczba1 = parseFloat(document.getElementById('l1').value);
    let liczba2 = parseFloat(document.getElementById('l2').value);

    let dzialanie = document.getElementById('typ').value;
    let wynik = document.getElementById('wynik');

    let wyn;

    switch (dzialanie) {
        case 'dodawanie':
            wyn = liczba1 + liczba2;
            break;

        case 'odejmowanie':
            wyn = liczba1 - liczba2;
            break;

        case 'mnozenie':
            wyn = liczba1 * liczba2;
            break;

        case 'dzielenie':
            if (liczba2 === 0) {
                wynik.textContent =  "Nie podzielisz sobie. :)";

            } else {
                wyn = liczba1 / liczba2;
            }
            break;

        default: 
            wynik.textContent =  "Nie.";
    }

    if (!isNaN(wyn)) {
        wynik.textContent = wyn;
    }
    else {
        wynik.textContent = "Nie!";
    }
}