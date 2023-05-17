(() => {
    let isSuperman:boolean = true;
    let isBatman:boolean = false;

    // Trucazo 
    // para imprimir el nombre de la variable 
    // y su valor
    // console.log({ isSuperman, isBatman });


    // de la operacion resulta un boolean 
    // eso esta bien 
    isSuperman = true && false;

    // Esto resulta muy util en casos como este
    // donde tenemos un ternario y retornamos un tipo 
    // de valor distinto al que fue declarado la variable
    // isBatman = (isSuperman) ? 'ABC' : 'XYZ';

    
    console.log({ isSuperman })
})()