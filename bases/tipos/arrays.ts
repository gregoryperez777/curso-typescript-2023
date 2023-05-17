(() => {

    // De esta de forma le decimos a typescript que 
    // que tipos acepta el array
    // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10, true];


   const numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

//    error
//    numbers.push(true);

//    console.log(numbers);

const villians = [ 'Omega Rojo', 'Dormammu', 'Duende Verde'];

villians.forEach(v => console.log(v.toUpperCase()));
numbers.forEach( v => console.log(console.log(v)))

})();