(() => {

    /**
     *  Never significa que mi funcion no puede 
     *  terminar exitosamente
     * 
     *  y el codigo a partir de ese punto no se sigue 
     *  ejecutando
     */


    // const error = (message: string):never => {
    //     throw new Error(message)
    // }


    /**
     *  En este caso hay un punto alcanzable
     *  lo que nos daria problema con el tipo 
     *  never
     * 
     *  entonces en este caso podemos decir que 
     *  tipo puede retornar
     */
    const error = (message: string):(never|number) => {
        if (false) {
            throw new Error(message)
        }

        return 1;
    }

    error('auxilio');

    // aqui no llega
    console.log('Hola Mundo')

})()