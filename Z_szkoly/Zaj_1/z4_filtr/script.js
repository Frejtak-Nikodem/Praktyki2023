function znajdz(x){
    let tab = [10, 11, "ania", 11];
    console.log("Tablica: ["+tab+"]");
    console.log("Znalezione: "+filtr(tab,x));
}

function filtr(tab, x){
    let arr = new Array();
    let wystapilo = 0;

    for(let i=0; i < tab.length; i++){
 
        if(tab[i]==x){
            arr[wystapilo] = tab[i];
            wystapilo++;
        }

    }

    if(wystapilo>0) {
        return arr;
    }
    
    else {
        return null;
    }
}