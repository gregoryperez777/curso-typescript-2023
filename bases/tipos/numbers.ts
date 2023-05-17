(() => {
    let avengers:number = 10;

    console.log({ avengers })

    const villians:number = 20;

    if ( avengers < villians ) {
        console.log('estamos en problemas')
    } else {
        console.log('estamos salvados')
    }

    // caso interesante donde typescript
    // no puede avisarnos que algo esta mal 
    // avengers = Number('123'); Esta bien
    // avengers = Number('55'); Esta bien
    
    // esto retorna un NaN
    // pero NaN es considerado un numero 
    // en javascript
    avengers = Number('55A');

    console.log({ avengers })
})();