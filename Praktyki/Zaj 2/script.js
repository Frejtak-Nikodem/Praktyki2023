function find() {
    const arr1 = ["Anna", "Maria", "Marek", "Tomasz"];

    const znajdz = arr1.filter(name => name.length <= 5 && name.endsWith('ek'));

    console.log(znajdz);
}