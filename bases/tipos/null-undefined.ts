(() => {

    /**
     *  strictNullChecks en el tsconfig por 
     *  default en true
     * 
     *  si se pasa a false permite inicializar 
     *  una variable con undefined aunque tenga
     *  un tipo definido
     * 
     *  lo cual esta mal
     * 
     *  NO SE DEBERIA QUITAR ESA RESTRICCION 
     *  PERO SE PUEDE
     */

    // para manejar boolean y number
    // let isActive: (boolean | number) = undefined;

    // tampoco es permitido
    // let isActive: boolean = null;

    // IMPORTANTE 
    // undefined es distinto de null

    // console.log(isActive);

})();