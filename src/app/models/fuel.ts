export class Fuel {
    id: number;
    type: string;
    adverts: string;

    constructor(id: number = null, type: string = null, adverts: string = null) {
        this.id = id;
        this.type = type;
        this.adverts = adverts;
    }
}
