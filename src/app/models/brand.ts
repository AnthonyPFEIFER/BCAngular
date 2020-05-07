export class Brand {
    id: number;
    name: string;
    models: string;

    constructor(id: number = null, name: string = null, models: string = null) {
        this.id = id;
        this.name = name;
        this.models = models;
    }
}
