import { Professional } from './professional';

export class Garage {
    id: number;
    professional: Professional;
    name: string;
    tel: string;
    address: string;
    city: string;
    postCode: string;
    country: string;

    // tslint:disable-next-line: max-line-length
    constructor(professional: Professional = null, name: string = null, tel: string = null, address: string = null, city: string = null, postCode: string = null, country: string = null) {

        this.professional = professional;
        this.name = name;
        this.tel = tel;
        this.address = address;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
    }
}
