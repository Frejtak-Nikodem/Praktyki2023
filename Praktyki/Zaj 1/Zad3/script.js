// Funkcja główna, która analizuje zawartość tablicy i podejmuje odpowiednie działania
function funkcja(arr){
    let licz_int=0; // Licznik liczb całkowitych
    let licz_str=0; // Licznik ciągów znaków

    // Pętla iterująca przez elementy tablicy
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            licz_int++; // Zwiększa licznik liczb całkowitych
        }else if(typeof arr[i] == 'string'){
            licz_str++; // Zwiększa licznik ciągów znaków
        }
    }

    // Sprawdza, czy w tablicy są tylko liczby całkowite
    if(licz_int==arr.length) {
        console.log("W tej tablicy są tylko liczby");
        arr = bubbleSort(arr); // Sortuje rosnąco tablicę liczb
        let wynik = przedostatni(arr); // Znajduje przedostatnią liczbę
        document.getElementById("wynik").innerHTML += "<br>Druga największa liczba to: "+wynik; //znaleźć przed ostatnią liczbę
        console.log(arr+" >> "+wynik);
    }
    // Sprawdza, czy w tablicy są tylko ciągi znaków
    else if(licz_str==arr.length) {
        console.log("W tej tablicy są tylko teksty");
        arr = bubbleSort_str(arr); // Sortuje rosnąco tablicę ciągów znaków według długości
        let wynik = przedostatni_str(arr); // Znajduje przedostatni ciąg znaków
        document.getElementById("wynik").innerHTML += "<br>Drugi najdłuższy tekst to: "+wynik;
        console.log(arr+" >> "+wynik);
    }
    else {
        console.log("W tej tablicy są różne typy danych lub nie są to liczby/teksty");
    }
}

// Funkcja sortująca tablicę rosnąco liczb całkowitych
function bubbleSort(tab){ 
    for (let i = 0; i < tab.length; i++) { 
        for (let j = 0; j < (tab.length - i - 1); j++) { 
            if (tab[j] > tab[j + 1]) { 
                let temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }
    return tab;
}

// Funkcja znajdująca przedostatnią liczbę w posortowanej tablicy liczb całkowitych
function przedostatni(tab){
    let znalazl = false;
    for(let i=tab.length-1; i>=0; i--) {
        if(!znalazl && tab[i]!=tab[i-1]){ //Jeżeli liczba się powtarza to ją ignorujemy
            znalazl = true;
            a = tab[i-1];
        }
    }
    return a;
}

// Funkcja sortująca tablicę rosnąco ciągów znaków według długości
function bubbleSort_str(tab){
    for (let i = 0; i < tab.length; i++) { 
        for (let j = 0; j < (tab.length - i - 1); j++) { 
            if (tab[j].length > tab[j + 1].length) { 
                let temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = temp;
            }
        }
    }
    return tab;
}

// Funkcja znajdująca przedostatni ciąg znaków w posortowanej tablicy ciągów znaków według długości
function przedostatni_str(tab){ 
    let znalazl = false;
    for(let i=tab.length-1; i>=0; i--) {
        if(!znalazl && tab[i].length!=tab[i-1].length){ //Jeżeli długość się powtarza to ją ignorujemy
            znalazl = true;
            a = tab[i-1];
        }
    }
    return a;
}

// Funkcja startująca program, wywołuje funkcję funkcja z przykładowymi danymi
function start(){ //Wprowadzamy dane 
    funkcja([1, 5, 10, 15]);
    //funkcja([5,7,9,2,"Map",8]);
    funkcja([1, 1, 3, 3, 4, 4]);
    funkcja(['Ala', 'Robert', 'Stanislaw']);
}
