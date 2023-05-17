import powers, { Power } from  '../data/power';

export class Hero {
    constructor(
        public name:string,
        public powerId: number,
        public age: number
    ){}

    get power (): string { //return string
        // operador chain
        // Evalua si es posible acceder a la propiedad siguiente 
        // si no lo es retorna undefined
        // return powers.find(power => power.id === this.powerId)?.desc || 'not found';
        
        // tambien esta este operador !
        // le dice a typescript que siempre va encontrar la propiedad
        return powers.find(power => power.id === this.powerId)!.desc || 'not found';
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}