import { Garage } from './garage';


export class Advert {
    id: number;
    garage: Garage;
    fuel: string;
    title: string;
    description: string;
    dateImmat: number;
    km: number;
    price: number;
    model: string;
    ref: string;
    brand: string;
    picture: string;

    // tslint:disable-next-line: max-line-length
    constructor(garage: Garage = null, fuel: string = null, title: string = null, description: string = null, dateImmat: number = null, km: number = null, price: number = null, model: string = null, brand: string = null, picture: string = null) {
        // this.id = id;
        this.garage = garage;
        this.fuel = fuel;
        this.title = title;
        this.description = description;
        this.dateImmat = dateImmat;
        this.km = km;
        this.price = price;
        this.model = model;
        this.brand = brand;
        this.picture = picture;
        // this.ref = ref;
    }
}
