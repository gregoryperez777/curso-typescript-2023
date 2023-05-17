(() => {

    // tambien se puede usar tuberia en los argumentos
    // const fullName = (firstName:string, lastName:(string|boolean)):string => {
    
    // el simbolo ? antes de : 
    // significa que el parametro es opcional
    
    const fullName = (firstName:string, lastName?:string):string => {
        return `${firstName} ${lastName || 'no lastname'}`;
    }

    const name:string = fullName('Tony');

    console.log({ name });
})()