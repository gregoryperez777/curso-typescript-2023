(() => {

    // En typescript olvidemonos del Var

    // Esto llego a ser permitido
    // console.log(a);
    // var a = 'Gregory'

    // Forma correcta
    let a = 'Gregory'
    console.log(a);

    // En el caso de las constante 
    // si es una variable no cambia
    // en javascript
    const nombre = 'Gregory';    

    // Pero si la constante es un objeto
    
    const heroe = {
        a: 1,
        b: 2
    }

    // podemos hacer esto para cambiar su valor
    // a pesar de ser una constante
    heroe.b = 100;


    const getName = (): void => {
        console.log('Viejo getName');
    }

    // getName = () => {
    //     console.log('Nuevo getName')
    // }

    // ES6 Deberia ser el estandar al 
    // cual se compila

})();