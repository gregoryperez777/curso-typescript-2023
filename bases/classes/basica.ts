(() => {

    class Avenger {

        // si no se le coloca un modificador a las propiedades 
        // por defecto es publico

        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        
        static getAvgAge () {

            // este this.name hace referencia al nombre de la 
            // clase que en este caso es Avenger

            return this.name;

            // sin embargo si tratamos de acceder a una propiedad
            // como tema o realName no podemos porque no existe
            // en javascript ese acceso
        }
       
        // Esto es valido y es tradicional
        // Forma larga del contructor en typescript
        // esta forma debe tener la propiedades declaradas
        // constructor(name:string, team:string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }

        // Forma corta de asignar propiedades
        // esta forma no necesita tener las propiedades declaradas
        constructor(
            private name: string, 
            private team:string, 
            public realName?: string
        ){};

        // si no se le coloca un modificador al metodo por defecto es publico 
        // private bio () {
        //     return `${this.name} (${this.team})`;
        // }

        public bio () {
            return `${this.name} (${this.team})`;
        }
    }

    const antman: Avenger = new Avenger('Antman', 'capitan', 'Scott Lang');

    // OJO en ES6 no hay forma de hacer que un metodo o propiedad presente en
    // una clase con un modificador private no sea accesible desde fuera de la 
    // clase 

    // En resumen aunque sea private esta puede ser accesible 
    // sin embargo typescript nos indica que no deberiamos hacer esto porque 
    // es privado

    // console.log(antman.bio());

    // Las propiedades estaticas se hacen acceden desde la
    // clase y no desde la instacia de la clase
    // console.log(Avenger.avgAge)
    // console.log(Avenger.getAvgAge())

})()