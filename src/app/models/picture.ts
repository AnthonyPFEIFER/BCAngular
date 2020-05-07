export class Picture {
    id: number;
    data: string;
    advert: string;
    constructor(id: number = null, data: string = null, advert: string = null) {
        this.id = id;
        this.data = data;
        this.advert = advert;
    }
}
