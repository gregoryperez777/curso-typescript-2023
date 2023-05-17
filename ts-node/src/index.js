// Aqui importamos algo expecifico del archivo Hero
// import { Hero as SuperHero, Hero2 } from './classes/Hero';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "./classes/Hero"], function (require, exports, HeroClasses) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HeroClasses = __importStar(HeroClasses);
    // const Ironman = new Hero('Ironman',1, 55);
    const Hero = 123;
    // supongamos que existe una variable llamada Hero
    // const Hero = new SuperHero('Ironman', 1, 55);
    const ironman = new HeroClasses.Hero('Ironman', 1, 55);
    console.log('Ironman', Hero);
});
