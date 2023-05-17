(() => {

    // Las clases abstractas sirven para crear otras clases
    // o para asegurarnos que otras clases implementen 
    // lo que se espera

    // no sirve para crear una instancia de es esa clase abstracta

    abstract class Mutante {
        constructor (
            public name:string,
            public realName:string,
        ) {}
    }

    // puedo usar mis clases como un tipo 
    // const wolverine: Mutante; 
    // const wolverine: Mutante = new Mutante('Wolverine', 'Logan') --> definir el tipo aqui esta como demas pero se puede hacer


    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a Salvo!';
        }
    };
    class Villian extends Mutante {
        conquitarMundo() {
            return 'Mundo conquistado';
        }
    };

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magnetus = new Villian('Magneto', 'Magnus');


    // console.log(wolverine);
    // console.log(magnetus);

    // console.log(wolverine.salvarMundo());
    // console.log(magnetus.conquitarMundo());

    // funcion que recibe un argumento de una clase
    // abstracta en este caso Mutante
    const printName = (character: Mutante) => {
        console.log(character.realName);
    }

    // Aqui le paso a wolverine que es una variable
    // de tipo Xmen y Xmen a su vez es una clase que 
    // extiende de Mutante que es una clase abstracta
    // printName(wolverine);
    // printName(magnetus);

})()