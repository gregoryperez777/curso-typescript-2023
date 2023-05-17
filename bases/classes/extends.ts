(() => {

    class Avenger {
        constructor(
            public name:string,
            public realName:string
        ) {
            // console.log('Constructor llamado')
        }

        // para que este metodo puede ser accedida desde 
        // una clase hija debe ser protected 
        protected getFullName () {
            return `${this.name} ${this.realName}`;
        } 
    }

    class Xmen extends Avenger {

        constructor(
            
            // argumento name y realName 
            // son necesarios en esta clase porque los 
            // necesita para instanciar llamar al super
            name:string,
            realName:string,
            public isMutant:boolean
        ) {
            // super debe ser la primera linea del constructor
            // cuando una clase hereda de otra porque sino typescript 
            // lanzara un error gravisimo 
            super(name, realName);
            // console.log('constructor Xmen llamado')
        }

        // getter no reciben parametros
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        // setter recibe obligatoriamente un solo parametro
        // setter no retornan nada
        set fullName(name: string) {

            // podemos aplicar logica de programacion

            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            } 

            this.name = name;
        }

        getFullNameFromXmen () {
            console.log( super.getFullName() )
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine)

    // no se le coloca parentesis () porque es
    // un getter no se ejecutan solo se llaman
    // console.log(wolverine.fullName)

    // wolverine.fullName = 'Gr';

    // console.log(wolverine.fullName)

    // wolverine.getFullNameFromXmen();
    

})()