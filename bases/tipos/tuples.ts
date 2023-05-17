(() => {

    /*
        Tupla es propio y nuevo de typescript 
        pero no existe en javascript
    */

    /**
     *  Aqui estamos diciendo que el primer
     *  elemento siempre va hacer un string
     *  y el segundo un number 
     */    
    const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    hero[0] = 'iroman';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero);

})()