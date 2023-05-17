(() => {

    // tambien se puede usar tuberia en los argumentos
    // const fullName = (firstName:string, lastName:(string|boolean)):string => {
    
    // el simbolo ? antes de : 
    // significa que el parametro es opcional
    
    // Nota importante los argumentos obligatorios no pueden
    // venir despues de un argumento opcional
    // ejemplo
    // const fullName = (firstName:string, lastName?:string, upper: boolean):string


    // Ahora al colocarle un valor de defecto 
    // upper: boolean = false
    // es como si le enviara siempre un valor 
    // y por eso desaparece la alerta

    const fullName = (firstName:string, lastName?:string, upper: boolean = false):string => {

        if (upper) {
            return `${firstName} ${lastName || 'no lastname'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || 'no lastname'}`
        }
        
    }

    const name:string = fullName('Tony', 'Stark', true);

    console.log({ name });
})()