export class Advert {
    id: number;
    garage: string;
    fuel: string;
    title: string;
    description: string;
    dateImmat: number;
    km: number;
    price: number;
    model: string;
    pictures: string;
    ref: string;


    // tslint:disable-next-line: max-line-length
    constructor(id: number = null, garage: string = null, fuel: string = null, title: string = null, description: string = null, dateImmat: number = null, km: number = null, price: number = null, model: string = null, pictures: string = null, ref: string = null) {
        this.id = id;
        this.garage = garage;
        this.fuel = fuel;
        this.title = title;
        this.description = description;
        this.dateImmat = dateImmat;
        this.km = km;
        this.price = price;
        this.model = model;
        this.pictures = pictures;
        this.ref = ref;
    }
}
