(() => {
    const addNumbers = (a: number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    // esto es legal
    // let myFunction: Function;
    
    // de esta forma se declara de tipo funcion 
    // con un tipo especifico de retorno y un tipo
    // especifico de argumentos 
    // let myFunction: (y:number, z:number) => number;
    // let myFunction: (y:string) => string;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction)

    // myFunction = addNumbers;
    // console.log(myFunction(1,2))

    // myFunction = greet;
    // console.log(myFunction('Gregory'))

    myFunction = saveTheWorld;
    console.log(myFunction())
})()