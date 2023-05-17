(() => {


    // Nota importante cuando una interfaz tiene mas de un nivel
    // es decir que tiene un objeto anidado se recomienda crear una 
    // nueva interfaz donde se defina a ese objecto u objetos internos
    
    // Otra nota importante al dividir la interfaz las buenas practicas
    // indican que la interfaz principal se declara primero y luego las 
    // interfaces secundarias

    // esto nos ayuda a mantener el nivel de indentacion sin importar
    // que tan anidado sea nuestro objeto 

    // Las interfaces no crean instancias

    interface Client {
        name: string;
        age?: number;
        address?: Address;
        // getFullAddress: (id: string) => void; en el curso esto no lo permite pero aqui parece que si
        getFullAddress(id: string):void;
    }

    interface Address {
        city: string,
        id: number,
        zip: string
    }

    const client: Client = {
        name: 'Gregory',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress() {
            return this.address?.city;
        } 
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            zip: 'KY2 SUD',
            id: 125
        },
        getFullAddress() {
            return this.address?.city;
        } 
    }
})()