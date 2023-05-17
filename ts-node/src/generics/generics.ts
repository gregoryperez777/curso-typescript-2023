export const printObject = (argument: any) => {
    console.log(argument);
}

// Funciones genericas usando los genericos de typescript
// para funciones declaradas de forma tradicional
// utilizamos <T> para decir que es una funcion generica
// como estandar se utiliza la T pero puede se cualquier 
// letra o palabra

// tambien se puede tener T,Y,Z ...
export function genericFunction<T>(argument: T):T {
    return argument;
}

// Funciones genericas usando los genericos de typescript
// para funciones declaradas de forma Arrow
// utilizamos <T> para decir que es una funcion generica
// como estandar se utiliza la T pero puede ser cualquier 
// letra o palabra

// tambien se puede tener <T,Y,Z, ...>
export const genericFuntionArrow = <T> (argument: T):T => argument;