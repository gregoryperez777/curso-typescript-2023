
// Declaramos un namespaces
namespace Validations {
    
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false
    }

    export const validateDate = (myDate: Date): boolean => {
        // isNaN is not a number
        return ( isNaN(myDate.valueOf()) ) 
            ? false
            : true
    }
}

// como se usa
console.log(Validations.validateText('Gre'))