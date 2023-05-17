(() => {

    interface addTwoNumbers {
        (a: number, b: number): number
    }

    let addNumberFuction: addTwoNumbers;

    addNumberFuction = (a: number, b: number) => {
        return 10
    }

})()