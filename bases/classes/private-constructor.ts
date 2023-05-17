(() => {

    // constructor privado para controlar la manera en que las 
    // instancias son controladas

    // si se coloca private al constructor solo 
    // va a poder llamarse dentro de la misma clase

    // Este ejemplo es el pricipio singlestone
    class Apocalipsis {

        static intance: Apocalipsis;

        private constructor(public name:string) {

        }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalisis el unico');
            }

            return Apocalipsis.intance;
        }

        changeName (newName: string): void {
           this.name = newName; 
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();


    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalisis('Soy Apocalipsis1 ...');
    // const apocalipsis2 = new Apocalisis('Soy Apocalipsis2 ...');
    // const apocalipsis3 = new Apocalisis('Soy Apocalipsis3 ...');

    console.log(apocalipsis1,apocalipsis2,apocalipsis3);

})()