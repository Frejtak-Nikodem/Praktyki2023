const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// Łączenie
const concatArrays = (array1, array2) => array1.concat(array2);
console.log(concatArrays(arr1, arr2));

// Ostatni Element
const lastElement = (array) => array.reverse()[0];
console.log(lastElement(arr2));

// Filtracja
const filterArray = (array, min = 0) => array.filter((element) => element > min); 
// Filtruje liczby które są większe od przekazanego argumentu
console.log(filterArray(numbers, 3));

// Suma (numbers)
const sumArray = (array, sum = 0) => array.reduce((res, ele) => res + ele, sum); 
// Sumuje wszystkie elementy zaczynając od wartości argumenty sum = 0
console.log(sumArray(numbers, 10));

// Map 
const mapArray = (array) => array.map((element) => Math.pow(element, 2) + 3);
// .map() po tablicy numbers i każdy element n^2+3
console.log(mapArray(numbers));