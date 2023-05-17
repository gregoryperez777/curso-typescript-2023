(() => {
    // palabra reservada para declarar un tipo
    // esta palabra no tiene contraparte en javascript
    // es decir que no genera codigo en JS
    type Hero = {
        name:string; 
        age?: number; 
        powers: number[]; 
        getName ?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Gregory';
    console.log(typeof myCustomVariable)

    myCustomVariable = 20;
    console.log(typeof myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };

    // Aqui va a imprimir que myCustomVariable
    // es de tipo object y no de tipo Hero
    // lo cual tiene mucho sentido porque 
    // el tipo Heroe no existe en el archivo
    // JS 
    console.log(typeof myCustomVariable)
    console.log(myCustomVariable)
})()