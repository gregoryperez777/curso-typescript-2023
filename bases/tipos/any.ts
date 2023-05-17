(() => {

    /*
        Tratar de Evitar lo mas posible usar 
        el tipo de dato ANY 
    */

    let avenger: any = 123;
    
    // si declaro de esta manera sin valor por default es de tipo any
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0))
    
    // casteo
    // esto solo se puede en typescript
    // esto lo hacemos para que nos aparezca la ayuda del IDE
    // existen 2 formas de hacer esto
    console.log((avenger as string).charAt(0))
    
    avenger = 150.23132132132;
    // se puede asi
    // console.log((<number>avenger).toFixed(2));
    
    // tambien se puede asi
    console.log((<number>avenger).toFixed(2));

    console.log(exists);
    console.log(power);
})()