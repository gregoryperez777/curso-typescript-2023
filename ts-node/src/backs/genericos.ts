import { genericFunction,  genericFuntionArrow,  printObject } from "../generics/generics";
import { Villain, Hero } from "../interfaces";


// import { Hero } from './classes/Hero';


// Aqui importamos algo expecifico del archivo Hero
// import { Hero as SuperHero, Hero2 } from './classes/Hero';

// Aqui importamos todo lo que esta en el archivo Hero
// import * as HeroClasses from './classes/Hero'


// importacion tradicional
// import { powers } from './data/power';

// importacion por default
// cuando importamos por default podemos
// nombre la importacion como queramos
// aqui importamos por powers por
// default y luego importamos Power 
// de forma tradicional porque ambos
// estan en el mismo archivo 
// import powers2, { Power } from './data/power';
// const Ironman = new Hero('Ironman',1, 55);

// supongamos que existe una variable llamada Hero
// const Hero = new SuperHero('Ironman', 1, 55);

// const ironman = new Hero('Ironman', 10, 55);

// console.log(ironman);
// console.log(ironman.power);

/*
    Fin de la seccion 10
*/

// printObject(123);
// printObject(new Date());
// printObject({ a:1, b:2, c:3 });
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject('Hola Mundo');


const name:string = 'Fernando';

// console.log(genericFunction(3.141516).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDay());

// console.log(genericFuntionArrow(3.141516).toFixed(2));
// console.log(genericFuntionArrow(name).toUpperCase());
// console.log(genericFuntionArrow(new Date()).getDay());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFuntionArrow<Villain>(deadpool).dangerLevel )