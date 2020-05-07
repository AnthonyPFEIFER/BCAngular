export class Model {
    id: number;
    name: string;
    brand: string;
    adverts: string;

    constructor(id: number = null, name: string = null, brand: string = null, adverts: string = null) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.adverts = adverts;
    }
}
