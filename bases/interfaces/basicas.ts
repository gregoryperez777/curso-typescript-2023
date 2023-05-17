(() => {

    // type vs interface

    // la unica diferencia es que los tipos no son 
    // extendibles pero las interfaces si

    interface Hero {
        name:string; 
        age?: number; 
        powers: number[]; 
        getName ?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 24,
        powers: [1],
        getName() {
            return this.name;
        }
    }
})()