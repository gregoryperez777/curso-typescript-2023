/**
 *  Los decoradores no son mas que una funcion
 *  que se va a ejecutar a la hora de transpilacion
 *  o compilacion del codigo
 */

import { createFalse } from "typescript";

function printToConsole(constructor: Function) {
    console.log(constructor);
}

const printToConsoleCondicional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
}

// Factorie decorator es una funcion
// que retorna otra funcion

function CheckValidPokemonId() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const originalMethod = descriptor.value;


        // descriptor.value se ejecuta con los argumentos
        // de la funcion a la que esta decorando
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe de estar entre 1 y 800');
            } else {

                // caso contrario se tenia que enviar el codigo 
                // el codigo que se estaba ejecutando 
                // y no puedo llamarlo nuevamente asi
                // descriptor.value ()

                return originalMethod(id);
            }
        }

        // descriptor.value = () => console.log('Hola Mundo');
    }
}

const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function readonly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey:string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this, 'getter');
                return 'Gregory'
            },
            set(this, val) {
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}


// Esto es valido es posible ejecutar varios decoradores
// y se ejecutan de forma secuencial

@bloquearPrototipo
@printToConsoleCondicional(false)
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string){}

    // Aqui se pone los parentesis porque es un factorie 
    // decoration
    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado a la DB ${id}`)
    }
}