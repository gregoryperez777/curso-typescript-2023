(() => {

    // tambien se puede usar tuberia en los argumentos
    // const fullName = (firstName:string, lastName:(string|boolean)):string => {
    const fullName = (firstName:string, lastName:string):string => {
        return `${firstName} ${lastName}`;
    }

    const name:string = fullName('Tony', 'Stark');

    console.log({ name });
})()