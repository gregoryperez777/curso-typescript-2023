export interface Power {
    id: number;
    desc: string;
}

// exportacion tradicional
// se importaria asi
// import { powers } from './data/power';
// export const powers: Power[] = [
//     {
//         id: 1,
//         desc: 'Money'
//     },
//     {
//         id: 2,
//         desc: 'Drugs'
//     }
// ];

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Drugs'
    }
];

export default powers;