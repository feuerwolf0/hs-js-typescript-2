import Buyable from './Buyable';
import { Genre, Country } from './types';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly secondName: string,
        readonly year: number,
        readonly country: Country,
        readonly slogan: string,
        readonly genres: Genre[],
        readonly duration: number,
        readonly imgURL: string,
        readonly price: number,
    ) {
    }
}