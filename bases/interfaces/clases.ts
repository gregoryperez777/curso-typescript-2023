(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: string): string;
    }

    interface Human {
        age: number;
    }

    // una clase no puede extender de una interfaz
    // una clase implementa una interfaces
    // class Mutant extends Xmen

    class Mutant implements Xmen, Human  {
        public age: number = 0;
        public name: string = '';
        public realName: string = '';

        mutantPower() {
            return `${this.name} ${this.realName}`
        }
    }
})()