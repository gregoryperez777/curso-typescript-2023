(() => {

    // Aqui typescript infiere los tipos 
    // de cada propiedad
    // let flash = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super Velocidad', 'Viajar en el tiempo']
    // }

    // pero si quiero modificar sus valores ocurre un 
    // error porque typescript creo un tipo de dato
    // con esas propiedades
    // flash = {
    //     name: 'Clar Kent',
    //     age: 60,
    //     powers: ['Super Fuerza'],
       
    //     // Ahora si le quiero añadir algo 
    //     // al objeto no se puede 
    //     getNombre() {
    //         return this.name
    //     }
    // }



    let flash: { name:string, age?: number, powers: string[], getName ?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    console.log('flash', flash);

    let superman: { name:string, age?: number, powers: string[], getName ?: () => string } = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super Velocidad']
    }

    // si definimos la funcion, al momento de invocarla
    // typescript no dara un error porque es opcional 
    // lo que indica que puede estar definida o no 
    // para usarla correctamente utilizamos el operado chain
    // aunque eso no desparecera el error

    // flash = {
    //     name: 'Clark Kent',
    //     // age: 24,
    //     powers: ['Super Velocidad', 'Viajar en el tiempo'],
    //     getName() {
    //         return this.name;
    //     }
    // }

    // console.log( flash?.getName());

})()