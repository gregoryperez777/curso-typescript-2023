(() => {

/**
 *  VOID es vacio 
 * 
 *  En javascript cuando una funcion 
 *  no tiene un retorno explicito 
 *  (es decir que no tiene return dentro de ella)
 *  retorna undefined  
 * 
 * 
 *  VOID es una forma de decirle a javascript
 *  que no hay un valor de retorno
 */

    function callBatman():void {
        // Si regreso algo dentro de ella me dira que no se puede
        // return 1;

        // pero si le paso un return solo lo acepta porque lo interpreta como 
        // void y no regresa nada
        // return;

        // null es distinto a undefined y por ende no es void
        // return null;
    }

    const callSuperman = ():void => {
        // Si regreso algo dentro de ella me dira que no se puede
        // return 1;

        // pero si le paso un return solo lo acepta porque lo interpreta como 
        // void y no regresa nada
        // return;

        // null es distinto a undefined y por ende no es void
        // return null;
    } 

    const a = callBatman();
    console.log(a)
})()