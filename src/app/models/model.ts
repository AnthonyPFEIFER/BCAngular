import { Brand } from './brand';

export class Model {
    id: number;
    name: string;
    brand: Brand;
    adverts: string;

    constructor(id: number = null, name: string = null, brand = null, adverts: string = null) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.adverts = adverts;
    }
}
