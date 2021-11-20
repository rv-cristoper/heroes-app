import heroes from '../data/heroes.json'
import { IHeroe } from './IHeroe';

export const getHeroes = (): IHeroe[] => {
    return heroes
}

export const getHeroesByPublisher = (publisher: string): IHeroe[] => {

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher === publisher)
}
