const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// Dodaj funkcję strzałkową używając .filter(), która odnajdzie wyłącznie liczby parzyste w numbers
const parzyste = (array) => array.filter((element) => element%2 == 0);
console.log(parzyste(numbers));