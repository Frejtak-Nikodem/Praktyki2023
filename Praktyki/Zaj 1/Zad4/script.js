function anagram(form){
    let w1 = sort(zamien(form.slowo.value));
    let w2 = sort(zamien(form.slowo2.value));
    let dzial = true;

    for(let i = 0; i < w1.length; i++){
        if(w1[i] != w2[i]){
            dzial = false;
            break;
        }
    }
    if(dzial && w1.length == w2.length){
        document.getElementById("wynik").innerHTML = "Te słowa są anagrami";
        console.log(w1+"   "+w2);
    }else{
        document.getElementById("wynik").innerHTML = "Te słowa nie są anagrami";
        console.log(w1+"   "+w2);
    }
}

function zamien(slowo){
    let nowy = [];
    for(let i=0; i<slowo.length; i++){
        nowy[i]=slowo.charCodeAt(i);
    }
    return nowy;
}

function sort(arr){
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < (arr.length - i - 1); j++) { 
            if (arr[j] > arr[j + 1]) { 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}