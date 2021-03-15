import { getJSON } from './utilities.js';


// Animals Model
export default class Animals {
    constructor() {
        this.baseUrl =
            'https://acnhapi.com/v1/';
        this.animals = [];
    }
    async getAnimals() {
        // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this.animals, then return it
        return this.animals;
    }
}

