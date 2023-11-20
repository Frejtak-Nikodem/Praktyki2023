function funkcja(arr){
    let licz_int=0;
    let licz_str=0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            licz_int++;
        }else if(typeof arr[i] == 'string'){
            licz_str++;
        }
    }
    if(licz_int==arr.length){
        console.log("W tej tablicy są tylko liczby");
        arr = bubbleSort(arr); //posortowana tablica
        let wynik = przedostatni(arr);
        document.getElementById("wynik").innerHTML += "<br>Druga największa liczba to: "+wynik; //znaleźć przed ostatnią liczbę
        console.log(arr+" >> "+wynik);
    }else if(licz_str==arr.length){
        console.log("W tej tablicy są tylko teksty");
        arr = bubbleSort_str(arr);
        let wynik = przedostatni_str(arr);
        document.getElementById("wynik").innerHTML += "<br>Drugi najdłuższy tekst to: "+wynik;
        console.log(arr+" >> "+wynik);
    }else{
        console.log("W tej tablicy są różne typy danych lub nie są to liczby/teksty");
    }
}

function bubbleSort(tab){ //sortuje rosnąco liczby
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

function przedostatni(tab){ //zwraca przedostatni element tablicy o typie number
    let znalazl = false;
    for(let i=tab.length-1; i>=0; i--) {
        if(!znalazl && tab[i]!=tab[i-1]){ //Jeżeli liczba się powtarza to ją ignorujemy
            znalazl = true;
            a = tab[i-1];
        }
    }
    return a;
}

function bubbleSort_str(tab){ //sortuje rosnąco teksty według długości
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

function przedostatni_str(tab){ //zwraca przedostatni element tablicy o typie string
    let znalazl = false;
    for(let i=tab.length-1; i>=0; i--) {
        if(!znalazl && tab[i].length!=tab[i-1].length){ //Jeżeli długość się powtarza to ją ignorujemy
            znalazl = true;
            a = tab[i-1];
        }
    }
    return a;
}

function start(){ //Wprowadzamy dane 
    funkcja([1, 5, 10, 15]);
    //funkcja([5,7,9,2,"Map",8]);
    funkcja([1, 1, 3, 3, 4, 4]);
    funkcja(['Ala', 'Robert', 'Stanislaw']);
}