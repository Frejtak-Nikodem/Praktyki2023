function Palindrome(form){
    let word = form.text1.value;

    if(word === myReverse(word)){
        document.getElementById("wynik").innerHTML = "True /jest palindromem/"
    }
    else {
        document.getElementById("wynik").innerHTML = "False /nie jest palindromem/"
    }

    //document.getElementById("reverseResult").innerHTML = myReverse(word);
}

function myReverse(newVarTest){
	let result = "";
	for(let i = newVarTest.length-1; i >= 0; i--){
		result = result + newVarTest[i];
	}
	return result
}

// Materiały z zajęc się przydają, bez nich mi błąd jakis wywalało :D