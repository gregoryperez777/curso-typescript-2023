(() => {

    type Avenger = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avenger: Avenger = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    // const { poder, vision }  = avenger;

    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( {ironman, ...rest}: Avenger): void => {
        console.log(ironman, rest);
    }

    // printAvenger(avenger);

    const avengerArr = ['Cap. América', 'Ironman', 'Hulk'];

    // Sin desestructuracion
    // const ironman = avengerArr[1];
    // console.log({ ironman });

    // con desestructuracion
    // tomando solo la posicion 1

    // cuando desestructuramos un arreglo 
    // podemos colocar cualquier nombre
    // para obtener la posicion correspondiente
    // a diferencia de los objetos que debemos 
    // colocar el nombre de la propiedad que 
    // queremos
    const [ , ironman, ] = avengerArr;
    console.log({ ironman });

    // obteniendo al cap
    const [ cap, , ] = avengerArr;

    console.log({ cap })

    // obeteniendo a Hulk
    const [ , , Hulk ] = avengerArr;

    console.log({ Hulk });


    // La desestructuracion funciona mucho mejor 
    // si se tienen los tipos definidos

    const avengerArr2: [ string, boolean, boolean ] = ['Cap. América', true, false];
    
    const [capitan, ironman3, seriaNumero] = avengerArr2;

    console.log({ ironman3, capitan })

})()