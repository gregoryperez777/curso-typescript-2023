(() => {
    type avenger = {
        name: string,
        weapon: string,
    }

    const ironman: avenger = {
        name: 'Ironman',
        weapon: 'Armosuit'
    };

    const captainAmerica: avenger = {
        name: 'capitan America',
        weapon: 'Escudo'
    }

    const thor: avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: avenger[] = [ironman, captainAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})()