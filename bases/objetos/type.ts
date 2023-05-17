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

    // ANTES
    // let flash: { name:string, age?: number, powers: string[], getName ?: () => string } = {
    //     name: 'Barry Allen',
    //     age: 24,
    //     powers: ['Super Velocidad', 'Viajar en el tiempo']
    // }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    // ANTES
    // let superman: { name:string, age?: number, powers: string[], getName ?: () => string } = {
    //     name: 'Clark Kent',
    //     age: 24,
    //     powers: ['Super Velocidad']
    // }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    }

})()